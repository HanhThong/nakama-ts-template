export const healthCheckRpc = (ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, payload: string) => {
  return JSON.stringify({
    success: true,
  });
};
