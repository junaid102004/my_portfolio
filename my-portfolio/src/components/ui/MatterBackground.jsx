import { useEffect, useRef } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import MatterWrap from "matter-wrap";

Matter.use(MatterAttractors);
Matter.use(MatterWrap);

export default function MatterBackground() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Common = Matter.Common;
    const Body = Matter.Body;
    const Mouse = Matter.Mouse;
    const Events = Matter.Events;

    if (!sceneRef.current) return;

    const { width, height } = sceneRef.current.getBoundingClientRect();

    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    const runner = Runner.create();

    const attractiveBody = Bodies.circle(
      width / 2,
      height / 2,
      Math.max(width / 25, height / 25) / 2,
      {
        isStatic: true,
        render: { fillStyle: "#000" },
        plugin: {
          attractors: [
            (bodyA, bodyB) => ({
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            }),
          ],
        },
      }
    );

    World.add(engine.world, attractiveBody);

    for (let i = 0; i < 40; i++) {
      const x = Common.random(0, width);
      const y = Common.random(0, height);
      const size = Common.random(10, 40);

      World.add(
        engine.world,
        Bodies.polygon(x, y, Common.random(3, 6), size, {
          mass: size / 20,
          friction: 0,
          frictionAir: 0.02,
          render: { fillStyle: "#222", strokeStyle: "#000", lineWidth: 1 },
        })
      );
    }

    const numParticles = 100;
    for (let i = 0; i < numParticles; i++) {
      const x = Common.random(0, width);
      const y = Common.random(0, height);
      const size = Common.random(14, 25);
      const isCircle = Math.random() > 0.5;

      const shape = isCircle
        ? Bodies.circle(x, y, size / 2, {
            mass: size / 20,
            friction: 0,
            frictionAir: 0.02,
            render: {
              fillStyle: "#444",
              strokeStyle: "#000",
              lineWidth: 1,
            },
          })
        : Bodies.polygon(x, y, Common.random(3, 6), size, {
            mass: size / 20,
            friction: 0,
            frictionAir: 0.02,
            render: {
              fillStyle: "#222",
              strokeStyle: "#000",
              lineWidth: 1,
            },
          });

      World.add(engine.world, shape);
    }

    const mouse = Mouse.create(render.canvas);
    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    Render.run(render);
    Runner.run(runner, engine);

    // Handle resize
    const handleResize = () => {
      if (!sceneRef.current) return;
      const { width, height } = sceneRef.current.getBoundingClientRect();
      render.canvas.width = width;
      render.canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      style={{
        position: "absolute",
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    />
  );
}
