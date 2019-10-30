import faker from "faker";
import randomColor from "randomcolor";
import moment from "moment";

export default function(roomCount = 2, tableCount=4, itemCount = 3, daysInPast = 1) {
  let randomSeed = Math.floor(Math.random() * 1000);
  let tableIds = [];
  let groups = [];
  let gId = 0;
  let parent, table;
  for (let i = 0; i < roomCount; i++) {
    parent = gId
    groups.push({
      id: `${gId++}`,
      title: faker.name.firstName() + " room",
      // rightTitle: faker.name.lastName(),
      root: true,
      height: 15,
      bgColor: randomColor({ luminosity: "light", seed: randomSeed + i }),

    });


    for (let j = 0; j < tableCount; j++) {
      table = gId;
      groups.push({
        id: `${gId++}`,
        title: faker.name.firstName() + " table GR:" + table,
        // rightTitle: faker.name.lastName(),
        parent: parent,
        root: false,
        bgColor: randomColor({ luminosity: "light", seed: randomSeed + i }),
        TableId: "groupId",
      });
      tableIds.push(table)
    }

  }

  let items = [];
  let itemGroup;
  for (let i = 0; i < itemCount; i++) {
    const startDate =
      faker.date.recent(daysInPast).valueOf() + daysInPast * 0.3 * 86400 * 1000;
    const startValue =
      Math.floor(moment(startDate).valueOf() / 10000000) * 10000000;
    const endValue = moment(
      startDate + faker.random.number({ min: 2, max: 20 }) * 15 * 60 * 1000
    ).valueOf();

    itemGroup = faker.random.arrayElement(tableIds) + "",
    items.push({
      id: i + "",
      group: [2,3],
      // title: faker.hacker.phrase(),
      title: `Item: ${i} Group: ${itemGroup}`,
      start: startValue,
      end: endValue,
      // canMove: startValue > new Date().getTime(),
      canResize: 'both',
      className:
        moment(startDate).day() === 6 || moment(startDate).day() === 0
          ? "item-weekend"
          : "",
      itemProps: {
        "data-tip": faker.hacker.phrase()
      }
    });
  }

  items = items.sort((a, b) => b - a);

  return { groups, items };
}
