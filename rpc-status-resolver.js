use strict";

/**
 * @file rpc-status-resolver.js
 * @description EVM RPC Status Resolver Tool for Monad / Base Eco infrastructure validation.
 * @version 1.0.0
 */

const formatLog = (level, message) => `[SYS-LOG] [${level.toUpperCase()}]: ${message}`;

/**
 * Analyzes HTTP response status codes from RPC nodes and determines the next DevOps action.
 * @param {number} statusCode - The HTTP status code received from the node.
 * @returns {string} Formatted log message with action plan.
 */
function resolveRpcStatus(statusCode) {
    if (typeof statusCode !== "number" || Number.isNaN(statusCode)) {
        return formatLog("error", "Invalid status code provided. Execution aborted.");
    }

    switch (statusCode) {
        case 200:
            return formatLog("info", "RPC Node Operational. Connection stable, block synchronized.");
        
        case 429:
            return formatLog("warn", "Rate Limit Exceeded (Too Many Requests). Triggering exponential backoff...");
        
        case 500:
            return formatLog("critical", "Internal RPC Error. Server crashed or node out of sync.");
        
        case 503:
            return formatLog("critical", "Service Unavailable. Node is under heavy load or maintenance.");
        
        default:
            return formatLog("debug", `Unknown status code received: ${statusCode}. Manual review required.`);
    }
}

// --- Local QA Test Suite ---
console.log(resolveRpcStatus(200));   // Expected: INFO log
console.log(resolveRpcStatus(429));   // Expected: WARN log
console.log(resolveRpcStatus(503));   // Expected: CRITICAL log
console.log(resolveRpcStatus(NaN));   // Expected: ERROR log (Input Validation test)