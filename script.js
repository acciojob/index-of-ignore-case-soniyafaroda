function indexOfIgnoreCase(str: string, subStr: string): number {
    // Edge case: empty substring → return 0 (consistent with normal indexOf behavior)
    if (subStr.length === 0) return 0;

    // Convert both to lowercase for case-insensitive comparison
    const s1 = str.toLowerCase();
    const s2 = subStr.toLowerCase();

    return s1.indexOf(s2);
}
