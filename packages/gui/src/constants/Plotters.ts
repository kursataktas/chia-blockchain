import PlotterName from './PlotterName';
import { PlotterOptions, PlotterDefaults } from 'types/Plotter';

export const bladebitOptions: PlotterOptions = {
  kSizes: [32],
  haveNumBuckets: false,
  haveMadmaxNumBucketsPhase3: false,
  haveMadmaxThreadMultiplier: false,
  haveMadmaxTempToggle: false,
  haveBladebitWarmStart: true,
  haveBladebitDisableNUMA: true,
  haveBladebitNoCpuAffinity: true,
  haveBladebitOutputDir: true,
  haveBladebit2Cache: false,
  haveBladebit2F1Threads: false,
  haveBladebit2FpThreads: false,
  haveBladebit2CThreads: false,
  haveBladebit2P2Threads: false,
  haveBladebit2P3Threads: false,
  haveBladebit2Alternate: false,
  canDisableBitfieldPlotting: false,
  canPlotInParallel: false,
  canDelayParallelPlots: false,
  canSetBufferSize: false,
};

export const bladebitDefaults: PlotterDefaults = {
  plotterName: PlotterName.BLADEBIT,
  plotSize: 32,
  numThreads: 0,
  numBuckets: undefined,
  madmaxNumBucketsPhase3: undefined,
  madmaxThreadMultiplier: undefined,
  madmaxWaitForCopy: undefined,
  madmaxTempToggle: undefined,
  bladebitWarmStart: false,
  bladebitDisableNUMA: false,
  bladebitNoCpuAffinity: false,
  bladebit2Cache: undefined,
  bladebit2F1Threads: undefined,
  bladebit2FpThreads: undefined,
  bladebit2CThreads: undefined,
  bladebit2P2Threads: undefined,
  bladebit2P3Threads: undefined,
  bladebit2Alternate: undefined,
  disableBitfieldPlotting: undefined,
  parallel: false,
  delay: 0,
};

export const bladebit2Options: PlotterOptions = {
  kSizes: [32],
  haveNumBuckets: true,
  haveMadmaxNumBucketsPhase3: false,
  haveMadmaxThreadMultiplier: false,
  haveMadmaxTempToggle: false,
  haveBladebitWarmStart: true,
  haveBladebitNoCpuAffinity: true,
  haveBladebitDisableNUMA: true,
  haveBladebitOutputDir: false,
  haveBladebit2Cache: true,
  haveBladebit2F1Threads: true,
  haveBladebit2FpThreads: true,
  haveBladebit2CThreads: true,
  haveBladebit2P2Threads: true,
  haveBladebit2P3Threads: true,
  haveBladebit2Alternate: true,
  canDisableBitfieldPlotting: false,
  canPlotInParallel: false,
  canDelayParallelPlots: false,
  canSetBufferSize: false,
};

export const bladebit2Defaults: PlotterDefaults = {
  plotterName: PlotterName.BLADEBIT2,
  plotSize: 32,
  numThreads: 0,
  numBuckets: 256,
  madmaxNumBucketsPhase3: undefined,
  madmaxThreadMultiplier: undefined,
  madmaxWaitForCopy: undefined,
  madmaxTempToggle: undefined,
  bladebitWarmStart: false,
  bladebitDisableNUMA: false,
  bladebitNoCpuAffinity: false,
  bladebit2Cache: undefined,
  bladebit2F1Threads: undefined,
  bladebit2FpThreads: undefined,
  bladebit2CThreads: undefined,
  bladebit2P2Threads: undefined,
  bladebit2P3Threads: undefined,
  bladebit2Alternate: undefined,
  disableBitfieldPlotting: undefined,
  parallel: false,
  delay: 0,
};

export const chiaposOptions: PlotterOptions = {
  kSizes: [25, 32, 33, 34, 35],
  haveNumBuckets: true,
  haveMadmaxNumBucketsPhase3: false,
  haveMadmaxThreadMultiplier: false,
  haveMadmaxTempToggle: false,
  haveBladebitWarmStart: false,
  haveBladebitDisableNUMA: false,
  haveBladebitNoCpuAffinity: false,
  haveBladebitOutputDir: false,
  haveBladebit2Cache: false,
  haveBladebit2F1Threads: false,
  haveBladebit2FpThreads: false,
  haveBladebit2CThreads: false,
  haveBladebit2P2Threads: false,
  haveBladebit2P3Threads: false,
  haveBladebit2Alternate: false,
  canDisableBitfieldPlotting: true,
  canPlotInParallel: true,
  canDelayParallelPlots: true,
  canSetBufferSize: true,
};

export const chiaposDefaults: PlotterDefaults = {
  plotterName: PlotterName.CHIAPOS,
  plotSize: 32,
  numThreads: 2,
  numBuckets: 128,
  madmaxNumBucketsPhase3: undefined,
  madmaxThreadMultiplier: undefined,
  madmaxWaitForCopy: undefined,
  madmaxTempToggle: undefined,
  bladebitWarmStart: undefined,
  bladebitDisableNUMA: undefined,
  bladebitNoCpuAffinity: undefined,
  bladebit2Cache: undefined,
  bladebit2F1Threads: undefined,
  bladebit2FpThreads: undefined,
  bladebit2CThreads: undefined,
  bladebit2P2Threads: undefined,
  bladebit2P3Threads: undefined,
  bladebit2Alternate: undefined,
  disableBitfieldPlotting: false,
  parallel: false,
  delay: 0,
};

export const madmaxOptions: PlotterOptions = {
  kSizes: [25, 32, 33, 34],
  haveNumBuckets: true,
  haveMadmaxNumBucketsPhase3: true,
  haveMadmaxThreadMultiplier: true,
  haveMadmaxTempToggle: true,
  haveBladebitWarmStart: false,
  haveBladebitDisableNUMA: false,
  haveBladebitNoCpuAffinity: false,
  haveBladebitOutputDir: false,
  haveBladebit2Cache: false,
  haveBladebit2F1Threads: false,
  haveBladebit2FpThreads: false,
  haveBladebit2CThreads: false,
  haveBladebit2P2Threads: false,
  haveBladebit2P3Threads: false,
  haveBladebit2Alternate: false,
  canDisableBitfieldPlotting: false,
  canPlotInParallel: false,
  canDelayParallelPlots: false,
  canSetBufferSize: false,
};

export const madmaxDefaults: PlotterDefaults = {
  plotterName: PlotterName.MADMAX,
  plotSize: 32,
  numThreads: 4,
  numBuckets: 256,
  madmaxNumBucketsPhase3: 256,
  madmaxThreadMultiplier: 1,
  madmaxWaitForCopy: true,
  madmaxTempToggle: false,
  bladebitWarmStart: undefined,
  bladebitDisableNUMA: undefined,
  bladebitNoCpuAffinity: undefined,
  bladebit2Cache: undefined,
  bladebit2F1Threads: undefined,
  bladebit2FpThreads: undefined,
  bladebit2CThreads: undefined,
  bladebit2P2Threads: undefined,
  bladebit2P3Threads: undefined,
  bladebit2Alternate: undefined,
  disableBitfieldPlotting: undefined,
  parallel: false,
  delay: 0,
};

export const optionsForPlotter = (plotterName: PlotterName): PlotterOptions => {
  switch (plotterName) {
    case PlotterName.BLADEBIT:
      return bladebitOptions;
    case PlotterName.BLADEBIT2:
      return bladebit2Options;
    case PlotterName.MADMAX:
      return madmaxOptions;
    case PlotterName.CHIAPOS: // fallthrough
    default:
      return chiaposOptions;
  }
};

export const defaultsForPlotter = (plotterName: PlotterName): PlotterDefaults => {
  switch (plotterName) {
    case PlotterName.BLADEBIT:
      return bladebitDefaults;
    case PlotterName.BLADEBIT2:
      return bladebit2Defaults;
    case PlotterName.MADMAX:
      return madmaxDefaults;
    case PlotterName.CHIAPOS: // fallthrough
    default:
      return chiaposDefaults;
  }
};
