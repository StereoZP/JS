const MAX_TANK_SPEED = 120;
const RANDOM_FACTOR = 0.15;


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomValue(value) {
    const randomValue = value - (value * (1 - RANDOM_FACTOR))
    const minLimitValue = value - randomValue
    const maxLimitValue = value + randomValue
    return getRandomArbitrary(minLimitValue, maxLimitValue)
}

const CREW_SKILL = {
    CAPTAIN: 'CAPTAIN',
    GUNLAYER: 'GUNLAYER',
    CHARGER: 'CHARGER',
    DRIVERMECHANIC: 'DRIVERMECHANIC'
}
const MODULE_TYPES = {
    GUN: 'GUN',
    ENGINE: 'ENGINE',
    TOWER: 'TOWER'
}

class CrewMember {
    constructor(firstName, surName, skill) {
        this.firstName = firstName
        this.surName = surName
        this.skill = skill
    }
}

class Captain extends CrewMember {
    constructor(firstName, surName) {
        super(firstName, surName, CREW_SKILL.CAPTAIN);
        this.firstName = firstName;
        this.surName = surName;
    }
}

class Gunlayer extends CrewMember {
    constructor(firstName, surName) {
        super(firstName, surName, CREW_SKILL.GUNLAYER);
        this.firstName = firstName;
        this.surName = surName;
    }
}

class Charger extends CrewMember {
    constructor(firstName, surName) {
        super(firstName, surName, CREW_SKILL.CHARGER);
        this.firstName = firstName;
        this.surName = surName;
    }
}

class DriverMechanic extends CrewMember {
    constructor(firstName, surName) {
        super(firstName, surName, CREW_SKILL.DRIVERMECHANIC);
        this.firstName = firstName;
        this.surName = surName;
    }
}

class Module { /* weapon only*/
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class Gun extends Module {
    constructor(name, damage, penetration, barrelAmount) {
        super(name, MODULE_TYPES.GUN);

        this.damage = damage;
        this.penetration = penetration;
        this.barrelAmount = barrelAmount;
    }

    set barrelAmount(amount) {
        if (amount > 2) {
            throw new Error('A gun cannot have more than two barrel')
        }
        this._barrelAmount = amount;
    }

    get barrelAmount() {
        return this._barrelAmount;
    }
}

class Engine extends Module {
    constructor(name, power) {
        super(name, MODULE_TYPES.ENGINE);
        this.power = power;
    }
}

class Tower extends Module {
    constructor(name, strenght) {
        super(name, MODULE_TYPES.TOWER);
        this.strenght = strenght;
    }
}

class TTX { // interface
    constructor(speed, maxSpeed, armor, visibility, hp) {
        this.speed = speed // km\h
        this.maxSpeed = maxSpeed;
        this.armor = armor; // mm
        this.visibility = visibility // (dont visible)0..1(visible)
        this.hp = hp;
    }
}

class Tank extends TTX { // abstract class Tank implements interface TTX
    constructor(user, type, maxSpeed, armor, visibility, hp, experience, money) {
        super(0, maxSpeed, armor, visibility, hp);

        this.user = null;
        this.type = type;
        this.crew = [];
        this.modules = [];
        this.isAlive = true;
        this.experience = experience;
        this.money = money;
    }

    get gun() {
        return this.modules.find((installingModule) => {
            return installingModule instanceof Gun
        });
    }
    get engine() {
        return this.modules.find((installingModule) => {
            return installingModule instanceof Engine
        });
    }
    get tower() {
        return this.modules.find((installingModule) => {
            return installingModule instanceof Tower
        });
    }

    get captain() {
        return this.crew.find((firstCrew) => {
            return firstCrew instanceof Captain
        });
    }
    get gunlayer() {
        return this.crew.find((firstCrew) => {
            return firstCrew instanceof Gunlayer
        });
    }
    get charger() {
        return this.crew.find((firstCrew) => {
            return firstCrew instanceof Charger
        });
    }
    get driverMechanic() {
        return this.crew.find((firstCrew) => {
            return firstCrew instanceof DriverMechanic
        });
    }

    setCrew(firstCrew) {
        this.crew.push(firstCrew);
    }
    setModule(installingModule) {

        if (installingModule instanceof Gun && this.gun) {
            throw new Error('A tank cannot have more than two gun')
        }
        this.modules.push(installingModule);
    }
    
    attack(tank) {
        if (this.isAlive) {

            const { armor } = tank;
            const { gun: { damage, penetration } } = this;

            if (getRandomValue(penetration) > getRandomValue(armor)) {
                tank.hp = tank.hp - getRandomValue(damage);
                const remainHp = tank.hp
                if (remainHp < 0) {
                    tank.isAlive = false;
                    tank.experience = tank.experience + getRandomValue(5);
                    tank.money = tank.money + getRandomValue(5);
                    this.experience = this.experience + 2 * (getRandomValue(10));
                    this.money = this.money + 2 * (getRandomValue(10));
                }
                return remainHp;
            }
            return null;
        }
        throw new Error('You are dead!')
    }

    ride(v) {
        if (v > this.maxSpeed) {
            this.speed = this.maxSpeed;
        } else {
            this.speed = v;
        }
    }

    ready() {
        if (this.modules.length === 0) {
            throw new Error('Tank is not ready');
        }
        if (this.gun === undefined) {
            throw new Error('Tank is not ready');
        }
    }
}

class MiddleTank extends Tank {
    constructor(maxSpeed, armor, visibility, hp) {
        super('Middle', maxSpeed, armor, visibility, hp, 0, 0)
    }
}

class HeavyTank extends Tank {
    constructor(maxSpeed, armor, visibility, hp) {
        super('Heavy', maxSpeed, armor, visibility, hp, 0, 0)
    }
}

class LightTank extends Tank {
    constructor(maxSpeed, armor, visibility, hp) {
        super('Light', maxSpeed, armor, visibility, hp, 0, 0)
    }
}

class User {
    constructor(username, login, password,currency, tanks) {

        this.username = username;
        this.login = login;
        this.password = password;
        this.currency = currency
        this.tanks = tanks || [];
        //Композиция или агрегация как то получится

    }
    addCurrency(){
        this.currency = this+this.currency;
        return this.currency;
    }

    ready() {
        if (this.username.length === 0) {
            throw new Error('Username is incorrect');
        }
    }
    setTanks(tanks) {
        this.tanks = tanks;
        this.tanks.forEach((tank)=> tank.user = this)
        return this.tanks;
    }

}

function prepareTanks() {
    const progetto = new MiddleTank(60, 100, 0.5, 1500);
    const d25t = new Gun('D-25T', 390, 105, 1);
    const jz = new Engine('JZ', 360);
    const steal20 = new Tower('Steal-20', 500);
    const firstCrew = new Captain('Ivan', 'Ivanov');
    const secondCrew = new Gunlayer('Vasiliy', 'Vasiliev');
    const thirdCrew = new Charger('Petr', 'Petrov');
    const fourthCrew = new DriverMechanic('Alex', 'Alexandrov');
    progetto.setModule(d25t);
    progetto.setModule(jz);
    progetto.setModule(steal20);
    progetto.setCrew(firstCrew);
    progetto.setCrew(secondCrew);
    progetto.setCrew(thirdCrew);
    progetto.setCrew(fourthCrew);


    const yoh = new HeavyTank(40, 110, 0.7, 1650);
    const yohGun = new Gun('YH-25E', 290, 120);
    yoh.setModule(yohGun);

    return [progetto, yoh].map((tank) => {
        tank.ready()
        return tank;
    });
}

function prepareUsers() {
    const stereoZP = new User('stereoZP', 'stereoZP@mail.com', '1234', 0, 0);
    return [stereoZP].map((user) => {
        user.setTanks(prepareTanks())
        return user;
    });
}

const arrayOfTanks = prepareTanks();
const prg = arrayOfTanks[0];
const yoh = arrayOfTanks[1];

const arrayOfUsers = prepareUsers();
const stereo = arrayOfUsers[0];








/* Реализовать систему накопления опыта(танку) и кредитов(юзеру)
Создать юзера*/