let list = [
    {
        "id": "1",
        "label": "rishav",
        "total": 0,
        "critical": false
    },
    {
        "id": "2",
        "label": "sahu",
        "total": 0,
        "critical": true
    },
    {
        "id": "3",
        "label": "RISHAV",
        "total": 0,
        "critical": false
    },
    {
        "id": "1",
        "label": "shu",
        "total": 0,
        "critical": true
    },
    {
        "id": "2",
        "label": "Yahoo",
        "total": 0,
        "critical": false
    },
    {
        "id": "3",
        "label": "RISHAV",
        "total": 0,
        "critical": true
    }
]

/** We can appy groupBy lodash and then sort 
 * NOTE: below code will work when lodash is available.
*/

// import { groupBy } from 'lodash';
// const groupedCritical = groupBy(list, 'critical');
// let groupBySort = []
// if (groupedCritical.true) {
//     groupBySort = [
//         ...groupedCritical.true.sort((a, b) =>
//             a.label.toLowerCase() > b.label.toLowerCase()
//                 ? -1
//                 : a.label.toLowerCase() < b.label.toLowerCase()
//                     ? 1
//                     : 0
//         )
//     ];
// }
// if (groupedCritical.false) {
//     groupBySort.push(...groupedCritical.false); // mutation can cause issue, when calling multiple time and list is available gloablly.
// }
// console.log(groupBySort)

/** We can appy groupBy lodash and then sort
 * NOTE: first sort by label and then by critical.
*/
let dualSortList = list.sort((a, b) =>
    a.label.toLowerCase() > b.label.toLowerCase()
        ? -1 : a.label.toLowerCase() < b.label.toLowerCase() ? 1 : 0
)
dualSortList = dualSortList.sort((a, b) => a.critical ? 1 : -1)
console.log(dualSortList)

/** Dual filter can apply */
let criticalList = list.filter(item => item.critical)
let nonCriticalList = list.filter(item => !item.critical)
let dualFilterList = criticalList.sort((a, b) =>
    a.label.toLowerCase() > b.label.toLowerCase()
        ? -1 : a.label.toLowerCase() < b.label.toLowerCase() ? 1 : 0
)
// dualFilterList.push(...nonCriticalList) //mutate way
dualFilterList = dualFilterList.concat(...nonCriticalList) // concat way
console.log(dualFilterList)

/** We can apply comparator. Best One*/
let sortedList = list.sort((a, b) => {
    if (a.critical && b.critical) {
        return (a.label.toLowerCase() > b.label.toLowerCase())
            ? 1 : (a.label.toLowerCase() < b.label.toLowerCase()) ? -1 : 0;
    }
    else if (a.critical) {
        return -1;
    }
    else if (b.critical) {
        return 1;
    }
    else {
        return (a.label.toLowerCase() > b.label.toLowerCase())
            ? 1 : (a.label.toLowerCase() < b.label.toLowerCase()) ? -1 : 0;
    }
})
console.log(sortedList)
