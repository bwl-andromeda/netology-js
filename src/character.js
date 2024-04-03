export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('error: 2 < name.length < 10 characters');
    }
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('error: invalid character type');
    }
    this.maxHealth = 100;
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    switch (type) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('dead');
    }
    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = this.maxHealth;
  }

  damage(points) {
    const damageTaken = points * (1 - this.defence / 100);
    this.health -= damageTaken;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowman');
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
  }
}