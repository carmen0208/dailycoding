var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SuperCharactor = /** @class */ (function () {
    function SuperCharactor(name) {
        this.name = name;
    }
    return SuperCharactor;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Hero;
}(SuperCharactor));
var Villain = /** @class */ (function (_super) {
    __extends(Villain, _super);
    function Villain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Villain;
}(SuperCharactor));
var SuperTeam = /** @class */ (function () {
    function SuperTeam(members, leader) {
        this.members = members;
        this.leader = leader;
    }
    return SuperTeam;
}());
var captainAmerica = new Hero("Captain America");
var thor = new Hero("Thor");
var ironMan = new Hero("IronMan");
var avengers = new SuperTeam([captainAmerica, thor, ironMan], captainAmerica);
var members = avengers.members;
var luthor = new Villain("Luthor");
var bizarro = new Villain("Bizarro");
var captainCold = new Villain("Captain Cold");
var legionOfDoom = new SuperTeam([luthor, bizarro, captainCold], luthor);
var megaCrossoverTeam = new SuperTeam([captainAmerica, thor, ironMan,
    luthor, bizarro, captainCold], captainAmerica);
