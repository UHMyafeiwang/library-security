// Assuming you have Underscore.js (Lodash) included in your project

function analyzeSecurity(observationData) {
  // Use _.reduce to accumulate the counts across all observations
  const totalCounts = _.reduce(
    observationData,
    function (result, observation) {
      // eslint-disable-next-line no-param-reassign
      result.truePositive += observation.truePositive;
      // eslint-disable-next-line no-param-reassign
      result.falsePositive += observation.falsePositive;
      // eslint-disable-next-line no-param-reassign
      result.trueNegative += observation.trueNegative;
      // eslint-disable-next-line no-param-reassign
      result.falseNegative += observation.falseNegative;
      return result;
    },
    {
      truePositive: 0,
      falsePositive: 0,
      trueNegative: 0,
      falseNegative: 0,
    },
  );

  return totalCounts;
}

// Example usage
console.log(analyzeSecurity([
  {
    truePositive: 1,
    falsePositive: 4,
    trueNegative: 8,
    falseNegative: 2,
  },
  {
    truePositive: 2,
    falsePositive: 4,
    trueNegative: 16,
    falseNegative: 1,
  },
]));

/*
 * Prints:
 *   {
 *     truePositive: 3,
 *     falsePositive: 8,
 *     trueNegative: 24,
 *     falseNegative: 3
 *   }
 */
