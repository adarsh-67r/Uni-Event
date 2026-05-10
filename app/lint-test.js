// lint-test.js — intentional lint ERRORS to validate CI workflow
// This file will be deleted after the draft PR test passes.

const unusedVariable = 'this triggers no-unused-vars (warning)';

// ERROR: debugger statements are forbidden (no-debugger = error)
debugger;

// ERROR: reference to a variable that doesn't exist (no-undef = error)
console.log(totallyUndefinedVariable);
