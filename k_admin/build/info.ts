import type { Plugin } from "vite";
import dayjs, { Dayjs } from "dayjs";
import utils from "@pureadmin/utils";
import duration from "dayjs/plugin/duration";
import { green, blue, bold } from "picocolors";
dayjs.extend(duration);

export function viteBuildInfo(): Plugin  {
  let config: { command: string };
  let startTime: Dayjs;
  let endTime: Dayjs;
  let outDir: string;
  const obj:Plugin = {
    name:'vite:buildInfo',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      outDir = resolvedConfig.build?.outDir ?? "dist";
    },
    config(){

    }

  }
  return {
    name: "vite:buildInfo",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      outDir = resolvedConfig.build?.outDir ?? "dist";
    },
  };
}
