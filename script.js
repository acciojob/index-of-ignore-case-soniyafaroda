function indexOfIgnoreCase(str, subStr) {
    if (subStr.length === 0) return 0;

    const s1 = str.toLowerCase();
    const s2 = subStr.toLowerCase();

    return s1.indexOf(s2);
}
