import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Play, Lock, BookOpen, FileText, SkipForward, Home } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { id: 0, title: "Tutorial Video", icon: Play },
  { id: 1, title: "Automation Starter Course", icon: BookOpen },
  { id: 2, title: "Complete Registration Form", icon: FileText },
];

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [courseCompleted, setCourseCompleted] = useState(false);
  const [player, setPlayer] = useState<any>(null);

  const handleSkipVideo = () => {
    setVideoCompleted(true);
    setCurrentStep(1);
  };

  const handleOpenCourse = () => {
    window.open(
      "https://academy.uipath.com/learning-plans/rpa-starter",
      "_blank"
    );
    setCourseCompleted(true);
    setCurrentStep(2);
  };

  const handleOpenForm = () => {
    window.open(
      "https://forms.gle/M741aXJ9LKLss4AbA",
      "_blank"
    );
  };

  useEffect(() => {
    // Load YouTube Iframe API
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      const newPlayer = new (window as any).YT.Player('youtube-player', {
        videoId: 'JO8eQPs31Qw',
        events: {
          onReady: () => {
            console.log('YouTube player ready');
          },
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              setVideoCompleted(true);
              setCurrentStep(1);
            }
          },
        },
      });
      setPlayer(newPlayer);
    };

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.08),transparent_60%)]" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black">
              Event <span className="text-orange-500">Registration</span>
            </h1>
            <p className="text-white/50 mt-4 text-lg">
              Complete each step to unlock your registration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">

            {/* LEFT SIDE STEPPER */}
            <div className="relative">

              {/* Vertical Line */}
              <div className="absolute left-5 top-5 bottom-5 w-[2px] bg-white/10" />

              {steps.map((step, index) => {
                const isActive = currentStep === index;
                const isCompleted = currentStep > index;
                const isLocked =
                  (index === 1 && !videoCompleted) ||
                  (index === 2 && !courseCompleted);

                return (
                  <div key={step.id} className="relative flex items-start gap-4 mb-12">

                    {/* Circle */}
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isCompleted
                          ? "bg-orange-500 border-orange-500"
                          : isActive
                          ? "border-orange-500"
                          : "border-white/20"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5 text-white" />
                      ) : isLocked ? (
                        <Lock className="w-5 h-5 text-white/40" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className={`font-semibold ${
                          isActive
                            ? "text-orange-500"
                            : isCompleted
                            ? "text-white"
                            : "text-white/40"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="md:col-span-2">

              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {currentStep === 0 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-10"
                  >
                    <h2 className="text-2xl font-bold mb-6">
                      Watch Tutorial Video
                    </h2>

                    <div className="aspect-video bg-black rounded-xl flex items-center justify-center mb-6 border border-white/10">
                      <div
                        id="youtube-player"
                        className="w-full h-full rounded-xl"
                      />
                    </div>

                    <button
                      onClick={handleSkipVideo}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition"
                    >
                      <SkipForward className="w-5 h-5" />
                      Skip Tutorial
                    </button>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {currentStep === 1 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-10"
                  >
                    <h2 className="text-2xl font-bold mb-6">
                      Automation Starter Course
                    </h2>

                    <p className="text-white/60 mb-8">
                      Open the official UiPath starter learning path.
                    </p>

                    <button
                      onClick={handleOpenCourse}
                      className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold transition transform hover:scale-105"
                    >
                      Open Course
                    </button>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {currentStep === 2 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-10"
                  >
                    <h2 className="text-2xl font-bold mb-6">
                      Complete Registration Form
                    </h2>

                    <button
                      onClick={handleOpenForm}
                      className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold transition transform hover:scale-105"
                    >
                      Open Registration Form
                    </button>

                    <div className="mt-10">
                      <Link to="/">
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition">
                          <Home className="w-5 h-5" />
                          Back to Home
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
