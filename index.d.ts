export interface SolverOptions {
    /**
     * Adds an extra 3 second delay between attempts to avoid rate limiting. Default: false
     */
    gentleMode?: boolean;

    /**
     * Time in milliseconds before the solve attempt fails. Default: 12000000
     */
    timeoutInMs?: number;

    /**
     * hCaptcha site key. Default: random UUID
     */
    siteKey?: string;
}

async function solveCaptcha(url: string, options: SolverOptions): Promise<string>

export = solveCaptcha;