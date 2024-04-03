import Character, { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../character.js';

describe('Character Class', () => {
  test('should create a character with valid name and type', () => {
    const character = new Character('Alice', 'Bowman');
    expect(character.name).toBe('Alice');
    expect(character.type).toBe('Bowman');
  });

  test('should throw an error for invalid name length', () => {
    expect(() => {
      new Character('A', 'Bowman');
    }).toThrow('error: 2 < name.length < 10 characters');
  });

  test('should throw an error for invalid character type', () => {
    expect(() => {
      new Character('Alice', 'Archer');
    }).toThrow('error: invalid character type');
  });

  test('should level up the character', () => {
    const character = new Character('Alice', 'Bowman');
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30);
    expect(character.defence).toBe(30);
    expect(character.health).toBe(100);
  });

  test('should damage the character', () => {
    const character = new Character('Alice', 'Bowman');
    character.damage(20);
    expect(character.health).toBe(85);
  });

  test('should create a Bowerman character', () => {
    const bowerman = new Bowerman('Bob');
    expect(bowerman.name).toBe('Bob');
    expect(bowerman.type).toBe('Bowman');
  });
  test('should create a Swordsman character', () => {
    const swordsman = new Swordsman('Sam');
    expect(swordsman.name).toBe('Sam');
    expect(swordsman.type).toBe('Swordsman');
  });
  
  test('should create a Magician character', () => {
    const magician = new Magician('Merlin');
    expect(magician.name).toBe('Merlin');
    expect(magician.type).toBe('Magician');
  });
  
  test('should create a Daemon character', () => {
    const daemon = new Daemon('Dave');
    expect(daemon.name).toBe('Dave');
    expect(daemon.type).toBe('Daemon');
  });
  
  test('should create an Undead character', () => {
    const undead = new Undead('Ursula');
    expect(undead.name).toBe('Ursula');
    expect(undead.type).toBe('Undead');
  });
  
  test('should create a Zombie character', () => {
    const zombie = new Zombie('Zack');
    expect(zombie.name).toBe('Zack');
    expect(zombie.type).toBe('Zombie');
  });
  test('should throw an error when trying to level up a dead character', () => {
    const character = new Character('Alice', 'Bowman');
    character.health = 0;
    expect(() => {
      character.levelUp();
    }).toThrow('dead');
  });
  
  test('should set health to 0 when taking fatal damage', () => {
    const character = new Character('Alice', 'Bowman');
    character.damage(200); // Assuming fatal damage
    expect(character.health).toBe(0);
  });
  
  test('should not set health to negative value when taking damage', () => {
    const character = new Character('Alice', 'Bowman');
    character.damage(200); // Assuming fatal damage
    expect(character.health).toBe(0);
  });
});