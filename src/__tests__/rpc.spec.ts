import { createMock } from 'ts-auto-mock';
import { healthCheckRpc } from '../rpcs';

describe('healthCheckRpc', () => {
  let mockCtx, mockLogger, mockNk;

  beforeEach(function () {
    // Create mock objects to pass to the RPC.
    mockCtx = createMock<nkruntime.Context>({ userId: 'mock-user' });
    mockLogger = createMock<nkruntime.Logger>();
    mockNk = createMock<nkruntime.Nakama>();
  });

  it('shoud return success', () => {
    const result = healthCheckRpc(mockCtx, mockLogger, mockNk, '');
    expect(JSON.parse(result)).toEqual({ success: true });
  });
});