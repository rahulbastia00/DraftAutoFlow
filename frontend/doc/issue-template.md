
# 🛠️ Issue Resolution Template

> Use this template to document and track every technical issue identified during development.
> Each issue should be logged clearly to enable future debugging, onboarding, and audits.

---

## Issue #<NUMBER>: <Short Descriptive Title>

**Status:** ⬜ Open / ✅ Resolved / ⏳ In Progress
**Severity:** Low / Medium / High / Critical
**Type:** Bug / Build Error / UI Issue / Logic Error / API Issue / Performance / Security
**Location:** `<file path(s)>`
**Detected By:** Manual Testing / AI Code Review / Linting / Runtime Error / User Report
**Reported On:** `<YYYY-MM-DD>`
**Resolved On:** `<YYYY-MM-DD>` (if applicable)

---

### 🐞 Problem Description

Clearly describe **what went wrong** and **how it affected the application**.

Include:

* Error message (if any)
* What feature or flow was broken
* When/where it occurred (build time, runtime, user action)

---

### 🔍 Root Cause Analysis

Explain **why the issue occurred**.

Possible causes:

* Incorrect logic
* Syntax errors
* Improper component structure
* Missing validation
* Incorrect API usage
* State mismanagement

Be specific and technical.

---

### 💥 Faulty Code / Pattern (If Applicable)

```tsx
// Add the problematic code snippet here
```

Explain **what exactly is wrong** in the snippet.

---

### 🛠️ Resolution Steps

List **step-by-step actions** taken to fix the issue:

1.
2.
3.
4.

This helps future developers understand the fix process.

---

### ✅ Final Corrected Code (If Applicable)

```tsx
// Add the corrected or optimized code here
```

Keep this concise and relevant.

---

### 🎯 Outcome

Describe the result after the fix:

* Build status
* Runtime behavior
* UI/UX impact
* Performance impact (if any)

---

### 📌 Key Takeaways / Prevention

What was learned, and how to **prevent this issue in the future**?

Examples:

* Add linting rule
* Improve validation
* Write unit tests
* Follow component structure guidelines
* Avoid duplicate UI elements

---

### 🔗 Related References (Optional)

* GitHub Issue: `#123`
* Pull Request: `#456`
* Documentation link
* Stack trace or logs

---

---

## 📖 Usage Guidelines

* One issue = one entry
* Keep titles clear and searchable
* Use code blocks for all snippets
* Update **Status** once resolved
* Reference this document in PRs if applicable

---

