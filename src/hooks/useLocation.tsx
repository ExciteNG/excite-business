import { useMemo } from "react";
import { statesAndLgas } from "@/constants/statesAndLgas";

const useLocation = (state: string | null = null) => {
  const memoizedStates = useMemo(() => Object.keys(statesAndLgas), []);
  const memoizedLga = useMemo(
    () => (state ? statesAndLgas[state] : []),
    [state]
  );
  return { states: memoizedStates, lga: memoizedLga };
};

export default useLocation;

