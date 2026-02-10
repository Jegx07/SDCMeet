import { SplineScene } from "@/components/ui/splite";

export const RobotSpline = () => {
  return (
    <div className="w-full h-[480px] md:h-[600px] lg:h-[680px] relative overflow-visible">
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full scale-[1.05] md:scale-[1.1] lg:scale-[1.15]"
      />
    </div>
  );
};
