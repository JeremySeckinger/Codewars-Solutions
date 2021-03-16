function findNeedle(haystack) {
    let needlePosition = haystack.findIndex(item => item === "needle");
    return `found the needle at position ${needlePosition}`;
    }