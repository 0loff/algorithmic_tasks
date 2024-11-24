## Algorithmic tasks

This is a repository for solving algorithmic problems and storing solutions in it
___

## Tasks:
### 1. Merge Intervals (leetcode 56).
<details closed>
<summary>Description</summary><br>

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
<details closed>
<summary>Examples</summary><br>

<b>Example 1</b>

><b>Input:</b> intervals = [[1,3],[2,6],[8,10],[15,18]]  
<b>Output:</b> [[1,6],[8,10],[15,18]]  
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

<b>Example 2</b>
><b>Input:</b> intervals = [[1,4],[4,5]]  
<b>Output:</b> [[1,5]]  
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
</details>
</details>

___

### 2. Longest Palindromic Substring (leetcode 5).
<details closed>
<summary>Description</summary><br>

Given a string `s`, return the longest palindromic substring in `s`.
<details closed>
<summary>Examples</summary><br>

<b>Example 1</b>

><b>Input:</b> s = "babad"  
<b>Output:</b> "bab"  
Explanation: "aba" is also a valid answer.

<b>Example 2</b>
><b>Input:</b> s = "cbbd"  
<b>Output:</b> "bb"  
</details>
</details>

___

### 3. Palindrome Number (leetcode 9).
<details closed>
<summary>Description</summary><br>

Given an integer `x`, return `true` if `x` is a _palindrome_ , and `false` otherwise.
<details closed>
<summary>Examples</summary><br>

**Example 1**

>**Input:** x = 121  
**Output:** true  
Explanation: 121 reads as 121 from left to right and from right to left.

**Example 2**

>**Input:** x = -121  
**Output:** false  
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.  

**Exmaple 3**

>**Input:** x = 10  
**Output:** false  
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
</details>
</details>

___

___

### 4. Regular Expression Matching (leetcode 10).
<details closed>
<summary>Description</summary><br>

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:  

+ `'.'` Matches any single character.​​​​
+ `'*'` Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).
<details closed>
<summary>Examples</summary><br>

**Example 1**

>**Input:** s = `"aa"`, p = `"a"`  
**Output:** `false`  
Explanation: `"a"` does not match the entire string `"aa"`.

**Example 2**

>**Input:** s = `"aa"`, p = `"a*"`  
**Output:** `true`  
Explanation: `'*'` means zero or more of the preceding element, `'a'`. Therefore, by repeating `'a'` once, it becomes `"aa"`.  

**Exmaple 3**

>**Input:** s = `"ab"`, p = `".*"`  
**Output:** `true`  
Explanation: `".*"` means "zero or more `(*)` of any character `(.)`".
</details>
</details>

___