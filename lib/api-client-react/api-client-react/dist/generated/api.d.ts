import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AccessCodeInput, AccessStatus, GetTransitMatchesParams, HealthStatus, ListReportsParams, ReportActivity, ReportInput, ReportStats, ReportStatusInput, RiderSubmission, RiderSubmissionInput, SubmissionResponseStatus, TransitInputClassification, TransitMatches, TransitReport, TransitRequestInput, TransitRequestResult } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetAccessStatusUrl: () => string;
/**
 * @summary Check whether this browser has unlocked the app
 */
export declare const getAccessStatus: (options?: Parameters<typeof customFetch>[1]) => Promise<AccessStatus>;
export declare const getGetAccessStatusQueryKey: () => readonly ["/api/access/status"];
export declare const getGetAccessStatusQueryOptions: <TData = Awaited<ReturnType<typeof getAccessStatus>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAccessStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAccessStatus>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAccessStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getAccessStatus>>>;
export type GetAccessStatusQueryError = ErrorType<void>;
/**
 * @summary Check whether this browser has unlocked the app
 */
export declare function useGetAccessStatus<TData = Awaited<ReturnType<typeof getAccessStatus>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAccessStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUnlockAccessUrl: () => string;
/**
 * @summary Unlock the reporting or saved-reports view with its four-digit code
 */
export declare const unlockAccess: (accessCodeInput: AccessCodeInput, options?: Parameters<typeof customFetch>[1]) => Promise<AccessStatus>;
export declare const getUnlockAccessMutationKey: () => readonly ["unlockAccess"];
export declare const getUnlockAccessMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof unlockAccess>>, TError, UnlockAccessMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof unlockAccess>>, TError, UnlockAccessMutationVariables, TContext>;
export type UnlockAccessMutationResult = NonNullable<Awaited<ReturnType<typeof unlockAccess>>>;
export type UnlockAccessMutationBody = BodyType<AccessCodeInput>;
export type UnlockAccessMutationError = ErrorType<void>;
export type UnlockAccessMutationVariables = {
    data: BodyType<AccessCodeInput>;
};
/**
* @summary Unlock the reporting or saved-reports view with its four-digit code
*/
export declare const useUnlockAccess: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof unlockAccess>>, TError, UnlockAccessMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof unlockAccess>>, TError, UnlockAccessMutationVariables, TContext>;
export declare const getLogoutAccessUrl: () => string;
/**
 * @summary Clear this browser's access session
 */
export declare const logoutAccess: (options?: Parameters<typeof customFetch>[1]) => Promise<AccessStatus>;
export declare const getLogoutAccessMutationKey: () => readonly ["logoutAccess"];
export declare const getLogoutAccessMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logoutAccess>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logoutAccess>>, TError, void, TContext>;
export type LogoutAccessMutationResult = NonNullable<Awaited<ReturnType<typeof logoutAccess>>>;
export type LogoutAccessMutationError = ErrorType<unknown>;
/**
* @summary Clear this browser's access session
*/
export declare const useLogoutAccess: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logoutAccess>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logoutAccess>>, TError, void, TContext>;
export declare const getListReportsUrl: (params?: ListReportsParams) => string;
/**
 * @summary List transit issue reports
 */
export declare const listReports: (params?: ListReportsParams, options?: Parameters<typeof customFetch>[1]) => Promise<TransitReport[]>;
export declare const getListReportsQueryKey: (params?: ListReportsParams) => readonly ["/api/reports", ...ListReportsParams[]];
export declare const getListReportsQueryOptions: <TData = Awaited<ReturnType<typeof listReports>>, TError = ErrorType<unknown>>(params?: ListReportsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listReports>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listReports>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListReportsQueryResult = NonNullable<Awaited<ReturnType<typeof listReports>>>;
export type ListReportsQueryError = ErrorType<unknown>;
/**
 * @summary List transit issue reports
 */
export declare function useListReports<TData = Awaited<ReturnType<typeof listReports>>, TError = ErrorType<unknown>>(params?: ListReportsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listReports>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateReportUrl: () => string;
/**
 * @summary Submit a transit issue report
 */
export declare const createReport: (reportInput: ReportInput, options?: Parameters<typeof customFetch>[1]) => Promise<TransitReport>;
export declare const getCreateReportMutationKey: () => readonly ["createReport"];
export declare const getCreateReportMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createReport>>, TError, CreateReportMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createReport>>, TError, CreateReportMutationVariables, TContext>;
export type CreateReportMutationResult = NonNullable<Awaited<ReturnType<typeof createReport>>>;
export type CreateReportMutationBody = BodyType<ReportInput>;
export type CreateReportMutationError = ErrorType<unknown>;
export type CreateReportMutationVariables = {
    data: BodyType<ReportInput>;
};
/**
* @summary Submit a transit issue report
*/
export declare const useCreateReport: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createReport>>, TError, CreateReportMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createReport>>, TError, CreateReportMutationVariables, TContext>;
export declare const getGetReportUrl: (id: string) => string;
/**
 * @summary Get a report by ID
 */
export declare const getReport: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<TransitReport>;
export declare const getGetReportQueryKey: (id: string) => readonly [`/api/reports/${string}`];
export declare const getGetReportQueryOptions: <TData = Awaited<ReturnType<typeof getReport>>, TError = ErrorType<void>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getReport>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getReport>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetReportQueryResult = NonNullable<Awaited<ReturnType<typeof getReport>>>;
export type GetReportQueryError = ErrorType<void>;
/**
 * @summary Get a report by ID
 */
export declare function useGetReport<TData = Awaited<ReturnType<typeof getReport>>, TError = ErrorType<void>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getReport>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateReportStatusUrl: (id: string) => string;
/**
 * @summary Update report status
 */
export declare const updateReportStatus: (id: string, reportStatusInput: ReportStatusInput, options?: Parameters<typeof customFetch>[1]) => Promise<TransitReport>;
export declare const getUpdateReportStatusMutationKey: () => readonly ["updateReportStatus"];
export declare const getUpdateReportStatusMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateReportStatus>>, TError, UpdateReportStatusMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateReportStatus>>, TError, UpdateReportStatusMutationVariables, TContext>;
export type UpdateReportStatusMutationResult = NonNullable<Awaited<ReturnType<typeof updateReportStatus>>>;
export type UpdateReportStatusMutationBody = BodyType<ReportStatusInput>;
export type UpdateReportStatusMutationError = ErrorType<unknown>;
export type UpdateReportStatusMutationVariables = {
    id: string;
    data: BodyType<ReportStatusInput>;
};
/**
* @summary Update report status
*/
export declare const useUpdateReportStatus: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateReportStatus>>, TError, UpdateReportStatusMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateReportStatus>>, TError, UpdateReportStatusMutationVariables, TContext>;
export declare const getGetReportStatsUrl: () => string;
/**
 * @summary Get report dashboard statistics
 */
export declare const getReportStats: (options?: Parameters<typeof customFetch>[1]) => Promise<ReportStats>;
export declare const getGetReportStatsQueryKey: () => readonly ["/api/reports/stats"];
export declare const getGetReportStatsQueryOptions: <TData = Awaited<ReturnType<typeof getReportStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getReportStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getReportStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetReportStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getReportStats>>>;
export type GetReportStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get report dashboard statistics
 */
export declare function useGetReportStats<TData = Awaited<ReturnType<typeof getReportStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getReportStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetRecentReportActivityUrl: () => string;
/**
 * @summary Get recent report activity
 */
export declare const getRecentReportActivity: (options?: Parameters<typeof customFetch>[1]) => Promise<ReportActivity[]>;
export declare const getGetRecentReportActivityQueryKey: () => readonly ["/api/reports/recent"];
export declare const getGetRecentReportActivityQueryOptions: <TData = Awaited<ReturnType<typeof getRecentReportActivity>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecentReportActivity>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRecentReportActivity>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRecentReportActivityQueryResult = NonNullable<Awaited<ReturnType<typeof getRecentReportActivity>>>;
export type GetRecentReportActivityQueryError = ErrorType<unknown>;
/**
 * @summary Get recent report activity
 */
export declare function useGetRecentReportActivity<TData = Awaited<ReturnType<typeof getRecentReportActivity>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecentReportActivity>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListSubmissionsUrl: () => string;
/**
 * @summary List rider submissions, newest first
 */
export declare const listSubmissions: (options?: Parameters<typeof customFetch>[1]) => Promise<RiderSubmission[]>;
export declare const getListSubmissionsQueryKey: () => readonly ["/api/submissions"];
export declare const getListSubmissionsQueryOptions: <TData = Awaited<ReturnType<typeof listSubmissions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSubmissions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listSubmissions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListSubmissionsQueryResult = NonNullable<Awaited<ReturnType<typeof listSubmissions>>>;
export type ListSubmissionsQueryError = ErrorType<unknown>;
/**
 * @summary List rider submissions, newest first
 */
export declare function useListSubmissions<TData = Awaited<ReturnType<typeof listSubmissions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSubmissions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateSubmissionUrl: () => string;
/**
 * @summary Save a rider submission, grounded response and source snapshots
 */
export declare const createSubmission: (riderSubmissionInput: RiderSubmissionInput, options?: Parameters<typeof customFetch>[1]) => Promise<RiderSubmission>;
export declare const getCreateSubmissionMutationKey: () => readonly ["createSubmission"];
export declare const getCreateSubmissionMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSubmission>>, TError, CreateSubmissionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createSubmission>>, TError, CreateSubmissionMutationVariables, TContext>;
export type CreateSubmissionMutationResult = NonNullable<Awaited<ReturnType<typeof createSubmission>>>;
export type CreateSubmissionMutationBody = BodyType<RiderSubmissionInput>;
export type CreateSubmissionMutationError = ErrorType<void>;
export type CreateSubmissionMutationVariables = {
    data: BodyType<RiderSubmissionInput>;
};
/**
* @summary Save a rider submission, grounded response and source snapshots
*/
export declare const useCreateSubmission: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSubmission>>, TError, CreateSubmissionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createSubmission>>, TError, CreateSubmissionMutationVariables, TContext>;
export declare const getUpdateSubmissionResponseStatusUrl: (id: string) => string;
/**
 * @summary Record whether a staff reply was sent (reviewer access only)
 */
export declare const updateSubmissionResponseStatus: (id: string, submissionResponseStatus: SubmissionResponseStatus, options?: Parameters<typeof customFetch>[1]) => Promise<RiderSubmission>;
export declare const getUpdateSubmissionResponseStatusMutationKey: () => readonly ["updateSubmissionResponseStatus"];
export declare const getUpdateSubmissionResponseStatusMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSubmissionResponseStatus>>, TError, UpdateSubmissionResponseStatusMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateSubmissionResponseStatus>>, TError, UpdateSubmissionResponseStatusMutationVariables, TContext>;
export type UpdateSubmissionResponseStatusMutationResult = NonNullable<Awaited<ReturnType<typeof updateSubmissionResponseStatus>>>;
export type UpdateSubmissionResponseStatusMutationBody = BodyType<SubmissionResponseStatus>;
export type UpdateSubmissionResponseStatusMutationError = ErrorType<void>;
export type UpdateSubmissionResponseStatusMutationVariables = {
    id: string;
    data: BodyType<SubmissionResponseStatus>;
};
/**
* @summary Record whether a staff reply was sent (reviewer access only)
*/
export declare const useUpdateSubmissionResponseStatus: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSubmissionResponseStatus>>, TError, UpdateSubmissionResponseStatusMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateSubmissionResponseStatus>>, TError, UpdateSubmissionResponseStatusMutationVariables, TContext>;
export declare const getResolveTransitRequestUrl: () => string;
/**
 * @summary Resolve a rider's question to verified station services and departures
 */
export declare const resolveTransitRequest: (transitRequestInput: TransitRequestInput, options?: Parameters<typeof customFetch>[1]) => Promise<TransitRequestResult>;
export declare const getResolveTransitRequestMutationKey: () => readonly ["resolveTransitRequest"];
export declare const getResolveTransitRequestMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof resolveTransitRequest>>, TError, ResolveTransitRequestMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof resolveTransitRequest>>, TError, ResolveTransitRequestMutationVariables, TContext>;
export type ResolveTransitRequestMutationResult = NonNullable<Awaited<ReturnType<typeof resolveTransitRequest>>>;
export type ResolveTransitRequestMutationBody = BodyType<TransitRequestInput>;
export type ResolveTransitRequestMutationError = ErrorType<void>;
export type ResolveTransitRequestMutationVariables = {
    data: BodyType<TransitRequestInput>;
};
/**
* @summary Resolve a rider's question to verified station services and departures
*/
export declare const useResolveTransitRequest: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof resolveTransitRequest>>, TError, ResolveTransitRequestMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof resolveTransitRequest>>, TError, ResolveTransitRequestMutationVariables, TContext>;
export declare const getGetTransitMatchesUrl: (params?: GetTransitMatchesParams) => string;
/**
 * @summary Find verified VTA route and stop candidates using cached reference data
 */
export declare const getTransitMatches: (params?: GetTransitMatchesParams, options?: Parameters<typeof customFetch>[1]) => Promise<TransitMatches>;
export declare const getGetTransitMatchesQueryKey: (params?: GetTransitMatchesParams) => readonly ["/api/transit/matches", ...GetTransitMatchesParams[]];
export declare const getGetTransitMatchesQueryOptions: <TData = Awaited<ReturnType<typeof getTransitMatches>>, TError = ErrorType<void>>(params?: GetTransitMatchesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransitMatches>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTransitMatches>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTransitMatchesQueryResult = NonNullable<Awaited<ReturnType<typeof getTransitMatches>>>;
export type GetTransitMatchesQueryError = ErrorType<void>;
/**
 * @summary Find verified VTA route and stop candidates using cached reference data
 */
export declare function useGetTransitMatches<TData = Awaited<ReturnType<typeof getTransitMatches>>, TError = ErrorType<void>>(params?: GetTransitMatchesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransitMatches>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getClassifyTransitInputUrl: () => string;
/**
 * @summary Classify input before entering the report workflow
 */
export declare const classifyTransitInput: (transitRequestInput: TransitRequestInput, options?: Parameters<typeof customFetch>[1]) => Promise<TransitInputClassification>;
export declare const getClassifyTransitInputMutationKey: () => readonly ["classifyTransitInput"];
export declare const getClassifyTransitInputMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof classifyTransitInput>>, TError, ClassifyTransitInputMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof classifyTransitInput>>, TError, ClassifyTransitInputMutationVariables, TContext>;
export type ClassifyTransitInputMutationResult = NonNullable<Awaited<ReturnType<typeof classifyTransitInput>>>;
export type ClassifyTransitInputMutationBody = BodyType<TransitRequestInput>;
export type ClassifyTransitInputMutationError = ErrorType<void>;
export type ClassifyTransitInputMutationVariables = {
    data: BodyType<TransitRequestInput>;
};
/**
* @summary Classify input before entering the report workflow
*/
export declare const useClassifyTransitInput: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof classifyTransitInput>>, TError, ClassifyTransitInputMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof classifyTransitInput>>, TError, ClassifyTransitInputMutationVariables, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map