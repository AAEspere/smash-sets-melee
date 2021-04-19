class set {
    constuctor(tourneyName, players, charPlayed, year) {
        this.tourneyName = tourneyName;
        this.players = players;
        this.charPlayed = charPlayed;
        this.year = year;
    }

    /**
     * In a smash set, there are the following
     * Tournament Name
     * Players (list)
     * Characters Played (list)
     * Year
     * 
     */

    //getters
    get tourney() {
        return this.tourneyName;
    }

    get players() {
        return this.players;
    }

    get charactersPlayed() {
        return this.charsPlayed;
    }

    get yearPlayed() {
        return this.year;
    }

    //setters
    set tourney(tourneyName) {
        this.tourneyName = tourneyName;
    }

    set players(players) {
        this.players = players;
    }

    set charactersPlayed(charsPlayed) {
        this.charsPlayed = charsPlayed;
    }

    set yearPlayed(year) {
        this.year = year;
    }

}