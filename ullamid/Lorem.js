/**
 * Finds the maximum offset value specified directly by legends.
 * @param {Array} legends - An array of legend objects, each potentially containing an offset value.
 * @returns {number} - The maximum offset value found, or 0 if no offsets are specified.
 */
function getMaxOffset(legends) {
    let maxOffset = 0;

    legends.forEach(legend => {
        if (legend.offset !== undefined && legend.offset !== null) {
            maxOffset = Math.max(maxOffset, legend.offset);
        }
    });

    return maxOffset;
}

// Example usage
const legends = [
    { name: 'Legend1', offset: 10 },
    { name: 'Legend2', offset: 20 },
    { name: 'Legend3' }, // No offset specified
    { name: 'Legend4', offset: 5 }
];

const maxOffset = getMaxOffset(legends);
console.log(`The maximum offset specified is: ${maxOffset}`); // Output: The maximum offset specified is: 20
