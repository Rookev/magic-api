class CardAPI {
  constructor() {
    this.sets = [];
    this.setsAreLoaded = false;
  }

  set Sets(newSet) {
    this.sets = this.buildSetlist(newSet);
    this.setsAreLoaded = true;
  }

  get Sets() {
    return this.sets;
  }

  buildSetlist(aFetchedSets) {
    var aSetsToExclude = ["Tokens", "Promos", "Oversized"];

    var aBasicSets = aFetchedSets.filter(function (oSet) {
      var bIncludeSet = true;
      // Check if set name contains one of the excluded strings
      aSetsToExclude.forEach(sSetToExclude => {
        // If yes -> remove
        if (oSet.name.includes(sSetToExclude)) {
          bIncludeSet = false;
        }
      });

      return bIncludeSet;
    });

    return aBasicSets;
  }
}

const singletonCardAPI = new CardAPI();

export default singletonCardAPI;