import { Observable, of, throwError } from "rxjs"

import {
	delay,
	mergeMap,
	retryWhen
} from "rxjs/operators"

const DEFAULT_MAX_RETRIES: number = 3;
const DEFAULT_BACKOFF: number = 1000;

const getErrorMessage = (maxRetry: number) =>
	`Tried to load resource over XHR for ${maxRetry} times without success. Giving Up.`;

export function retryWithBackOff(
	delayMs: number,
	maxRetry = DEFAULT_MAX_RETRIES,
	backOffMs = DEFAULT_BACKOFF
) {
	let retries = maxRetry;
	return (src: Observable<any>) =>
		src.pipe(
			retryWhen((err: Observable<any>) =>
				err.pipe(
					mergeMap(error => {
						if (retries-- > 0) {
							const backOffTime =
								delayMs + (maxRetry - retries) * backOffMs;
							return of(error).pipe(delay(backOffTime));
                        }
                        return throwError(getErrorMessage(maxRetry));
					})
				)
			)
		);
}