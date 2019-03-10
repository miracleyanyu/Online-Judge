import { Injectable } from '@angular/core';
import { PROBLEMS } from '../mock-problems';
import { PROBLEM } from '../models/problem.model';

@Injectable()
export class DataService {

  constructor() { }

  getProblems(): PROBLEM[] {
    return PROBLEMS;
  }

  getProblem(id: number): PROBLEM {
    return PROBLEMS.find((PROBLEM) => PROBLEM.id === id)
  }

}
 