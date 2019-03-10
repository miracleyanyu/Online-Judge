import { PROBLEM } from './models/problem.model';

export const PROBLEMS: PROBLEM[] = [
    {
      id: 1,
      name: "twoSum",
      desc: "Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
      difficulty: "easy"
    },
    {
      id: 2,
      name: "threeSum",
      desc: "Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.",
      difficulty: "medium"
    },
    {
      id: 3,
      name: "fourSum",
      desc: "Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.",
      difficulty: "medium"
    },
    {
      id: 4,
      name: "Trapping Rain Water",
      desc: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.",
      difficulty: "hard"
    },
    {
      id: 5,
      name: "Median of Two Sorted Arrays",
      desc: "There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). You may assume nums1 and nums2 cannot be both empty.",
      difficulty: "super"
    }
  ];