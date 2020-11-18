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
      group: [2,3,6],
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

  groups = [
    { 'id': '1006689', 'roomId': 1006689, 'title': 'Sicilia', root: true, 'collapsed': false },
    { 'id': '1006696', 'tableId': 1006696, 'title': '01', root: false, 'parent': 1006689, 'covers_min': 1, 'covers_max': 2 },
    { 'id': '1006697', 'tableId': 1006697, 'title': '02', root: false, 'parent': 1006689, 'covers_min': 3, 'covers_max': 4 },
    { 'id': '1006698', 'tableId': 1006698, 'title': '03', root: false, 'parent': 1006689, 'covers_min': 3, 'covers_max': 4 },
    { 'id': '1006699', 'tableId': 1006699, 'title': '04', root: false, 'parent': 1006689, 'covers_min': 1, 'covers_max': 2 },
    { 'id': '1006700', 'tableId': 1006700, 'title': '05', root: false, 'parent': 1006689, 'covers_min': 1, 'covers_max': 2 },
    { 'id': '1006690', 'roomId': 1006690, 'title': 'Venezia', root: true, 'collapsed': false },
    { 'id': '1006692', 'tableId': 1006692, 'title': '06', root: false, 'parent': 1006690, 'covers_min': 1, 'covers_max': 2 },
    { 'id': '1006693', 'tableId': 1006693, 'title': '07', root: false, 'parent': 1006690, 'covers_min': 1, 'covers_max': 2 },
    { 'id': '1006694', 'tableId': 1006694, 'title': '08', root: false, 'parent': 1006690, 'covers_min': 1, 'covers_max': 2 },
    { 'id': '2006694', 'tableId': 2006694, 'title': '18', root: false, 'parent': 1006690, 'covers_min': 1, 'covers_max': 2 },
    { 'id': '1006695', 'tableId': 1006695, 'title': '09', root: false, 'parent': 1006690, 'covers_min': 1, 'covers_max': 2 },
    { 'id': '1006691', 'roomId': 1006691, 'title': 'Toscana', root: true, 'collapsed': false },
    { 'id': '1006701', 'tableId': 1006701, 'title': '10', root: false, 'parent': 1006691, 'covers_min': 4, 'covers_max': 6 },
    { 'id': '1006702', 'tableId': 1006702, 'title': '11', root: false, 'parent': 1006691, 'covers_min': 3, 'covers_max': 4 },
    { 'id': '1006704', 'tableId': 1006704, 'title': '12', root: false, 'parent': 1006691, 'covers_min': 3, 'covers_max': 4 },
    { 'id': '1006706', 'tableId': 1006706, 'title': '13', root: false, 'parent': 1006691, 'covers_min': 4, 'covers_max': 6 },
    { 'id': '1823736', 'roomId': 1823736, 'title': 'Bar (phone reservations only)', root: true, 'collapsed': false },
    { 'id': '1823742', 'tableId': 1823742, 'title': 'B1', root: false, 'parent': 1823736, 'covers_min': 1, 'covers_max': 1 },
    { 'id': '1823743', 'tableId': 1823743, 'title': 'B2', root: false, 'parent': 1823736, 'covers_min': 1, 'covers_max': 1 },
    { 'id': '1823744', 'tableId': 1823744, 'title': 'B3', root: false, 'parent': 1823736, 'covers_min': 1, 'covers_max': 1 }];
  items = [
    {
      'id': 3597162,
      'group': ['1006692', '1006700', '1006693', '1006699'],
      'title': 'fdsfsdfewr',
      'start': moment().startOf('day').hour(13).minute(0).valueOf(),
      'end':   moment().startOf('day').hour(14).minute(0).valueOf(),
      'canResize': 'both',
      'canMove': true,
      'spinner': false,
      'itemProps': {},
      'reservation': {
        'id': 3597162,
        'numberOfGuests': 6,
        'status': 'approved',
        'name': 'fdsfsdfewr',
        'email': '',
        'phoneNumber': '+3704234324432',
        'company': '',
        'language': 'lt',
        'tags': [],
        'clientTags': [],
        'clientDetails': '',
        'tables': ['1006699', '1006700', '1006692', '1006693'],
        'startTime': '2019-10-31T18:00:00.000Z',
        'endTime': '2019-10-31T19:59:00.000Z',
        'comments': [],
        'newComment': '',
        'initialTime': '2019-10-31 18:00:00',
        'showInitialTimeBadge': 0,
        'notifications': {
          'sms': true,
          'email': true,
          'resend': false,
          'language': 'lt',
        },
        'origin': 'phone',
        'specialOffers': [],
        'specialOffer': '_none',
        'created': 1572463533,
        'changed': 1572463560,
        'timeFormat': 'HH:mm',
        'arrivedCount': 1,
      },
    },
    // {
    //   'id': 3597164,
    //   'group': ['1006696'],
    //   'title': 'Paweł Olszewski',
    //   'start': 1572546600000,
    //   'end': 1572557400000,
    //   'canResize': 'both',
    //   'canMove': true,
    //   'spinner': false,
    //   'itemProps': {},
    //   'reservation': {
    //     'id': 3597164,
    //     'numberOfGuests': 5,
    //     'status': 'approved',
    //     'name': 'Paweł Olszewski',
    //     'email': 'pawel@olszewski.vn.pl',
    //     'phoneNumber': '+1 503613793',
    //     'company': '',
    //     'language': 'lt',
    //     'tags': [],
    //     'clientTags': [],
    //     'clientDetails': '',
    //     'tables': ['1006696'],
    //     'startTime': '2019-10-31T18:30:00.000Z',
    //     'endTime': '2019-10-31T21:29:59.000Z',
    //     'comments': [],
    //     'newComment': '',
    //     'initialTime': '2019-10-31 18:30:00',
    //     'showInitialTimeBadge': 0,
    //     'notifications': {
    //       'sms': false,
    //       'email': true,
    //       'resend': false,
    //       'language': 'lt',
    //     },
    //     'origin': 'phone',
    //     'specialOffers': [],
    //     'specialOffer': '_none',
    //     'created': 1572473330,
    //     'changed': 1572473341,
    //     'timeFormat': 'HH:mm',
    //     'arrivedCount': 1,
    //   },
    // }
    ]
  // items = []
  return { groups, items };
}
