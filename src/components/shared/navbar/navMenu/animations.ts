import useLayoutEffect from "@/utils/useLayoutEffect";
import { gsap } from "gsap/dist/gsap";

interface navbarMenuAnimationProps {
  firstTime: boolean;
  setFirstTime: React.Dispatch<React.SetStateAction<boolean>>;
  tl: React.MutableRefObject<gsap.core.Timeline | undefined>;
  children: gsap.utils.SelectorFunc;
  menuOpen: boolean;
}

export const useNavbarMenuAnimation = ({
  firstTime,
  setFirstTime,
  tl,
  children,
  menuOpen,
}: navbarMenuAnimationProps) => {
  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 1.1 }, paused: true });
    if (firstTime) {
      return;
    }
    tl.current!.pause();
    tl.current!.to(
      [
        children(".logo"),
        children(".bookNow"),
        "#hero .title",
        "#hero #features",
      ],
      {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power1.in",
      }
    )
      .to(children("#navMenu"), {
        width: "20%",
        duration: 1.2,
        ease: "Power1.easeIn",
      })
      .to(
        children("#navMenu"),
        {
          width: "100%",
          duration: 0.7,
          ease: "Power1.easeOut",
        },
        "-=0.4"
      )
      .from(children(".menuName"), {
        stagger: 0.05,
        autoAlpha: 0,
        y: 30,
        ease: "Power1.ease",
      });
  }, [firstTime]);
  useLayoutEffect(() => {
    setFirstTime(false);
    if (menuOpen) {
      tl.current!.play();
    } else {
      tl.current!.reverse(1.9);
    }
  }, [menuOpen]);
};
