/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const validatePassKey = (storedChallenge: string, clientChallenge: string) => {
  return storedChallenge === clientChallenge;
};

export default validatePassKey;
