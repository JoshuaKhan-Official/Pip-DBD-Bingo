/*
  Things I was thinking of eventually adding:
  * a challenge difficulty selection
  * a way to replace the center free space with another challenge
  * a killer bingo sheet generator
  * a survivor solo queue bingo sheet generator
*/

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRandomNumber(limit) {
  // Returns a random integer between 0 and (limit - 1)
  return Math.floor(Math.random() * limit);
}

function getRandomSurvivorBloodpointCategory() {
  // Returns Objective, Survival, Altruism, or Boldness
  var category = "";
  switch (getRandomNumber(4)) {
    case 0:
      category = "Objective";
      break;
    case 1:
      category = "Survival";
      break;
    case 2:
      category = "Altruism";
      break;
    case 3:
      category = "Boldness";
      break;
  }
  return category;
}

function getRandomSurvivorItemType() {
  var itemType = "";
  switch (getRandomNumber(5)) {
    case 0:
      itemType = "Medkit";
      break;
    case 1:
      itemType = "Toolbox";
      break;
    case 2:
      itemType = "Key";
      break;
    case 3:
      itemType = "Map";
      break;
    case 4:
      itemType = "Flashlight";
      break;
  }
  return itemType;
}

function getRandomRarity() {
  var rarity = "";
  switch (getRandomNumber(4)) {
    case 0:
      rarity = "Brown";
      break;
    case 1:
      rarity = "Yellow";
      break;
    case 2:
      rarity = "Green";
      break;
    case 3:
      rarity = "Purple";
      break;
  }
  return rarity;
}

function getKillerPerkType() {
  var killerPerkType = "";
  switch (getRandomNumber(4)) {
    case 0:
      killerPerkType = "Exposure";
      break;
    case 1:
      killerPerkType = "Info/Aura-reading";
      break;
    case 2:
      killerPerkType = "Hex";
      break;
    case 3:
      killerPerkType = "Chase/Tracking";
      break;
  }
  return killerPerkType;
}

function getRandomSurvivorName() {
  var survivorName = "";
  switch (getRandomNumberInRange(1, 42)) {
    case 1:
      survivorName = "Meg Thomas";
      break;
    case 2:
      survivorName = "Claudette Morel";
      break;
    case 3:
      survivorName = "Jake Park";
      break;
    case 4:
      survivorName = "Nea Karlsson";
      break;
    case 5:
      survivorName = "Laurie Strode";
      break;
    case 6:
      survivorName = "Ace Visconti";
      break;
    case 7:
      survivorName = "Bill Overbeck";
      break;
    case 8:
      survivorName = "Feng Min";
      break;
    case 9:
      survivorName = "David King";
      break;
    case 10:
      survivorName = "Quentin Smith";
      break;
    case 11:
      survivorName = "David Tapp";
      break;
    case 12:
      survivorName = "Kate Denson";
      break;
    case 13:
      survivorName = "Adam Francis";
      break;
    case 14:
      survivorName = "Jeff Johansen";
      break;
    case 15:
      survivorName = "Jane Romero";
      break;
    case 16:
      survivorName = "Ash Williams";
      break;
    case 17:
      survivorName = "Nancy Wheeler";
      break;
    case 18:
      survivorName = "Steve Harrington";
      break;
    case 19:
      survivorName = "Yui Kimura";
      break;
    case 20:
      survivorName = "Zarina Kassir";
      break;
    case 21:
      survivorName = "Cheryl Mason";
      break;
    case 22:
      survivorName = "Felix Richter";
      break;
    case 23:
      survivorName = "Élodie Rakoto";
      break;
    case 24:
      survivorName = "Yun-Jin Lee";
      break;
    case 25:
      survivorName = "Jill Valentine";
      break;
    case 26:
      survivorName = "Leon S. Kennedy";
      break;
    case 27:
      survivorName = "Mikaela Reid";
      break;
    case 28:
      survivorName = "Jonah Vasquez";
      break;
    case 29:
      survivorName = "Yoichi Asakawa";
      break;
    case 30:
      survivorName = "Haddie Kaur";
      break;
    case 31:
      survivorName = "Ada Wong";
      break;
    case 32:
      survivorName = "Rebecca Chambers";
      break;
    case 33:
      survivorName = "Vittorio Toscano";
      break;
    case 34:
      survivorName = "Thalita 'Thighlita' Lyra";
      break;
    case 35:
      survivorName = "Renato Lyra";
      break;
    case 36:
      survivorName = "Gabriel Soma";
      break;
    case 37:
      survivorName = "Nicholas Cage";
      break;
    case 38:
      survivorName = "Ellen Ripley";
      break;
    case 39:
      survivorName = "Alan Wake";
      break;
    case 40:
      survivorName = "Sable Ward";
      break;
    case 41:
      survivorName = "Aestri Yazar or Baermar Uraz";
      break;
    case 42:
      survivorName = "Lara Croft";
      break;
    default:
      survivorName = "Dwight Fairfield";
  }
  return survivorName;
}

function generateBaseChallenges() {
  return [
    "Any survivor finds a " + getRandomSurvivorItemType(),
    "Any survivor brings a Toolbox with a Brand New Part add-on",
    "Witness any survivor 360 the killer",
    "360 the killer",
    "Killer has a one shot power",
    "Killer has a ranged power",
    "Witness any survivor get grabbed out of a locker",
    "Palette Stun the killer " +
      getRandomNumberInRange(1, 3) +
      " times in a single Trial",
    "Witness any survivor palette stun the killer",
    "All survivors play as free/starting survivors",
    "Killer brings a " + getKillerPerkType() + " perk",
    "Witness a killer miss a basic attack on any survivor",
    "Killer brings any of their own teachables/add-ons",
    "Killer is a free/starting killer",
    "Killer is a paid/DLC killer",
    "No map or sacrificial ward offering was burned this Trial",
    "Basement chest was looted",
    "All survivors loot a combined total of " +
      getRandomNumberInRange(3, 5) +
      " chests",
    "Enter the trial without an item and escape with a chest-looted item",
    "Enter the trial without an item and escape with an item by any means",
    "Escape a trial by any means",
    "Unhook yourself by any means",
    "Never get downed in " + getRandomNumberInRange(1, 3) + " Trial(s)",
    "Body block a survivor-carrying killer successfully",
    "Destroy " + getRandomNumberInRange(1, 3) + " totems or more",
    "Jump off of a hill, building, or other tall landmark " +
      getRandomNumberInRange(1, 3) +
      " or more times in a single trial",
    "Killer farms you off hook",
    "Get a flashlight save",
    "Get a pallet stun save",
    "Sabotage a hook that a killer is bringing a survivor towards",
    "Rescue a teammate from a hook with two or fewer gens remaining",
    "Finish a trial as the Obsession",
    "Hit " + getRandomNumberInRange(2, 5) + " Great skill checks by any means",
    "Hit " +
      getRandomNumberInRange(2, 4) +
      " CONSECUTIVE Great skill checks by any means",
    "Play a Trial with inverted camera controls",
    "Play a Trial with inverted controls",
    "Max out your bloodpoints in the " +
      getRandomSurvivorBloodpointCategory() +
      " category",
    "Escape a Trial with Adept perks only",
    "Wiggle free of a Killer's grasp",
    "Complete " + getRandomNumberInRange(2, 5) + " generators with another survivor",
    "Assist another survivor in finishing " +
      getRandomNumberInRange(3, 5) +
      " actions while running Leader",
    "Bring a " +
      getRandomRarity() +
      " " +
      getRandomSurvivorItemType() +
      " to " +
      getRandomNumberInRange(1, 3) +
      " trials",
    "Killer brings AT LEAST 1 or more iridescent add-ons",
    "Play a match as " + getRandomSurvivorName(),
    "See the aura of all three teammates at the same time using BOND",
    "Complete " +
      getRandomNumberInRange(2, 5) +
      " generators with another survivor using PROVE THYSELF",
    "Use LEADER to help any other survivor Cleanse a Totem and open a Chest",
    "Use QUICK AND QUIET to fast jump into a locker while in the Killer's terror radius",
    "Use SPRINT BURST but don't run for the first minute of the match",
    "Any Survivor heals one health state using ADRENALINE",
    "Heal other survivors " +
      getRandomNumberInRange(2 - 4) +
      " health states while using EMPATHY",
    "Fully deplete " +
      getRandomNumberInRange(1, 3) +
      " Medkit(s) while using BOTANY KNOWLEDGE",
    "Fully heal yourself " + getRandomNumberInRange(3, 5) + " times using SELF CARE",
    "Hide in a locker when hurt while using IRON WILL",
    "Cleanse 2 totems OR open 3 chests in one match using CALM SPIRIT",
    "Sabotage " +
      getRandomNumberInRange(3, 5) +
      " hooks in one match while running SABOTEUR",
    "Fall from a great height and get a speed boost from BALANCED LANDING twice in 1 match",
    "Crouch walk for 10 seconds within the Killer's Terror Radius using URBAN EVASION",
    "Fully consume 3 items in one Trial using STREETWISE",
    "Successfully activate We're Gonna Live Forever's secondary function twice in 1 Trial",
    "Successfully take an extra hit using DEAD HARD",
    "Escape from a Trial by any means using the dumpster fire known as NO MITHER",
    "Using OPEN-HANDED, see any 5 different auras in one Trial (chest, teammate, killer, totem, etc.)",
    "Any survivor successfully unhooks while you are running UP THE ANTE",
    "Escape a Trial with a purple or better add-on while running ACE IN THE HOLE",
    "Miss 3 consecutive gen skill checks while running TECHNICIAN",
    "Successfully escape a chase using LITHE",
    "See the killer's aura 7 times using ALERT",
    "See the killer's aura 2 times in one Trial using DARK SENSE",
    "Complete a generator shown by DEJA VU before the final 3 gens are completed",
    "Successfully gain the benefit of HOPE in 2 separate matches",
    "Any survivor runs KINDRED in 3 separate matches",
    "Escape 3 chases while running LIGHTWEIGHT",
    "Successfully get 1 hook rescue during Endgame Collapse while running NO ONE LEFT BEHIND",
    "Successfully search 5 chests while running PLUNDERER'S INSTINCT",
    "Hide from the killer and avoid getting chases after being warned from PREMONITION",
    "Successfully complete a generator while using RESILIENCE",
    "Any survivor successfully unhooks themselves while using SLIPPERY MEAT",
    "Cleanse 3 totems in one match using SMALL GAME",
    "Finish a generator while being affected by SPINE CHILL",
    "Get 10 great skill checks while using THIS IS NOT HAPPENING",
    "Successfully heal 2 survivors that you unhooked using WE'LL MAKE IT in a single Trial",
    "Escape with any survivors Adept Perks only",
    "Bring a " +
      getRandomRarity() +
      " or better item and give it to a teammate",
    "Bring a " +
      getRandomSurvivorItemType() +
      " and fully deplete it, then escape with the same " +
      getRandomSurvivorItemType().toLowerCase(),
    "Open hatch using a Key that you brought to the Trial",
    "Get 5 blinds using a flashlight",
    "Pet Maurice at the carnival outside of Father Campbell’s Church",
    "Get the killer to break one of the doors",
    "Watch the killer chase another survivor for 15 seconds",
    "See the hatches aura by using LEFT BEHIND",
    "Get two rescues in a single Trial using BORROWED TIME",
    "Successfully recover from the dying state using UNBREAKABLE",
    "Succesfully complete a generator while you're the last survivor alive using SOLE SURVIVOR",
    "Complete a generator while you can see the Killer's aura using OBJECT OF OBSESSION",
    "The Killer gets hit with a DECISIVE STRIKE by any survivor",
    "Successfully open an Exit Gate using WAKE UP!",
    "Find 3 Green MedKits using PHARMACY",
    "Get through 7 status effects using the perk VIGIL without getting hit",
    "Max recover from the dying state while crawling the entire time using TENACITY",
    "Use DETECTIVE'S HUNCH to Cleanse a totem, open a chest, and complete a generator in a single Trial",
    "Get 7 Great Skill Checks in a single Trial using STAKE OUT",
    "Lose a killer chasing you while using DANCE WITH ME",
    "Vault 3 different windows in 1 chase while using WINDOWS OF OPPORTUNITY",
    "Escape the grasp of the killer 2 times using BOIL OVER",
    "Successfully distract the killer using DIVERSION",
    "Successfully unhook yourself using DELIVERANCE in 2 Trials",
    "Get max stacks of AUTODIDACT",
    "Break two hooks in a single Trial using BREAKDOWN",
    "See all 3 other survivors auras at the same time using AFTER CARE",
    "Use 5 tokens of DISTORTION in a single Trial",
    "Successfully get 50% of self heal by using SOLIDARITY",
    "Complete 2 generators in a single Trial using POISED",
    "Get 4 successful HEAD ON stuns",
    "Escape from the Killer's grasp 2 times in a single Trial using FLIP-FLOP",
    "Successfully heal 2 survivors from the dying state using BUCKLE UP",
    "Successfully activate METTLE OF MAN",
    "Safely unhook 3 survivors in a single Trial using BABYSITTER",
    "Successfully heal yourself using SECOND WIND",
    "Successfully gain the benefit from CAMARADERIE in 2 Trials",
    "Successfully heal 3 times by using INNER STRENGTH",
    "Don't run for 60 consecutive seconds while using FIXATED",
    "See your teammates auras 3 times in a single Trial using BETTER TOGETHER",
    "Finish the match without running out of LUCKY BREAK charges",
    "Pick up 5 pallets in a single Trial using ANY MEANS NECESSARY",
    "Help 2 survivors break free from the Killer's grasp using BREAK OUT",
    "Take an Endurance hit using OFF THE RECORD",
    "Successfully trick the killer using RED HERRING",
    "Heal 3 survivors using FOR THE PEOPLE",
    "Successfully recover from the dying state thanks to SOUL GUARD",
    "Get the speed boost from Blood Pact for 60 seconds straight",
    "Stop the killer from kicking a gen by using REPRESSED ALLIANCE, then finish that gen",
    "Finish a generator while using VISIONARY and then get on a new gen before it reactivates",
    "Unhook or heal 5 survivors in a single Trial while using DESPERATE MEASURES",
    "Use BUILT TO LAST 3 times in a single Trial",
    "Use all 3 tokens of APPRAISAL in a single Trial",
    "Successfully trick the Killer using DECEPTION",
    "Successfully stun the Killer using POWER STRUGGLE",
    "Get 27 stacks of FAST TRACK and use them all at once",
    "Successfully stun the Killer using SMASH HIT",
    "Activate SELF-PRESERVATION 2 times in a single Trial",
    "Fully heal any survivor while in the Killer's terror radius",
    "Blind the killer 3 times using FLASHBANGS",
    "Activate ROOKIE SPIRIT 5 Trials in a row",
    "Cleanse all 5 totems in a single Trial using COUNTERFORCE",
    "Get unhooked and healed without moving using RESURGENCE",
    "Blind the Killer " + getRandomNumberInRange(3, 5) + " times with BLAST MINE",
    "Find Hatch using CLAIRVOYANCE",
    "Successfully heal 3 other survivors using BOON: CIRCLE OF HEALING",
    "Successfully lose the Killer in chase using BOON: SHADOW STEP",
    "Successfully escape 3 chases using OVERCOME",
    "Successfully consume 7 CORRECTIVE ACTION tokens",
    "Any survivor successfully recovers from the dying state thanks to BOON: EXPONENTIAL",
    "Activate PARENTAL GUIDANCE 3 times",
    "Heal 3 other survivors that come to you using EMPATHIC CONNECTION",
    "Apply BOON: DARK THEORY to a totem in 3 different Trials",
    "See the Killer's aura 3 times due to INNER FOCUS",
    "Blind the Killer by any means 3 times using RESIDUAL MANIFEST",
    "Complete 2 generators while OVERZEALOUS is active",
    "Heal a survivor using BETTER THAN NEW, then help that survivor complete a generator",
    "Successfully use REASSURANCE and then pick up/unhook the survivor 3 times in a single Trial",
    "Get max stacks of HYPERFOCUS",
    "Successfully see the Killer's aura using WIRETAP",
    "Get healed by REACTIVE HEALING 2 times in a single Trial",
    "Successfully escape while LOW PROFILE is active",
    "Get max stacks on POTENTIAL ENERGY and use them on a different generator",
    "See the Killer's aura 7 times using FOGWISE",
    "Using QUICK GAMBIT, have a generator complete while you are being chased",
    "Succesfully vault quickly twice using CUT LOOSE in a single Trial",
    "Complete a generator while FRIENDLY COMPETITION is Active",
    "Maintain the effect of TEAMWORK: POWER OF TWO until the cooldown ends",
    "Get a flashlight or pallet stun save while using BACKGROUND PLAYER",
    "Activate BLOOD RUSH and fully heal due to its effect",
    "Maintain the effect of TEAMWORK: COLLECTIVE STEALTH until the cooldown ends",
    "Have two generators get completed in 1 chase while using TROUBLESHOOTER",
    "Gain the Endurance effect 2 times while using MADE FOR THIS",
    "Fully repair a toolbox twice in a single Trial using SCAVENGER",
    "Activate DRAMATURGY and get all 4 effects in a single Trial",
    "See the Killer's aura using SCENE PARTNER 3 times in a single Trial",
    "Successfully use PLOT TWIST twice in the same Trial",
    "'Freeze' a killer 2 times with CHEMICAL TRAP",
    "Complete a generator that was revealed to you with LUCKY STAR",
    "Stay within the killer's terror radius for 30 seconds without being noticed while using LIGHT-FOOTED",
    "Blind a killer 3 times while using CHAMPION OF LIGHT",
    "Cleanse 2 totems while under the effect of BOON: ILLUMINATION",
    "Complete 2 generators while under the effect of DEADLINE",
    "Escape a match after successfully using INVOCATION: WEAVING SPIDERS",
    "Heal yourself in the basement 2 times in a single Trial using STRENGTH IN SHADOWS",
    "Unhook yourself from basement hook using WICKED",
    "Roll a 20 using BARDIC INSPIRATION",
    "See the killer’s aura for a total of 10 seconds using STILL SIGHT",
    "Successfully use MIRRORED ILLUSION to trick the killer 1 time",
  ];

}

function regenerateNonToxicChallenges() {
  return [
    "You Head On the killer " +
      (getRandomNumberInRange(1, 4) + 1) +
      " or more times in a single trial",
    "You use Borrowed Time to rescue a hooked survivor while in the killer's terror radius",
    "Get four stacks on We're Gonna Live Forever",
  ].concat(generateBaseChallenges());
}

function regenerateAllChallenges(NTC) {
  return [].concat(NTC);
}

function generateButtonClick(seedText, bool, activatedDLC, spanTitles) {
  // bool is true when inputting a custom seed
  if (!bool) {
    var x = new Math.seedrandom();
    seedText.value = x.int32();
  }
  Math.seedrandom(seedText.value);

  // Reassess which DLC are activated
  activatedDLC = dlcData(spanTitles);
  allSurvivorPerkNames = baseSurvivorPerkNames;
  allKillerPerkNames = baseKillerPerkNames;
  for (var i = 0; i < activatedDLC.length; i++) {
    if (activatedDLC[i].activated == true) {
      allSurvivorPerkNames = allSurvivorPerkNames
        .concat(activatedDLC[i].survivorPerks)
        .concat(activatedDLC[i].survivor2Perks)
        .sort();
      allKillerPerkNames = allKillerPerkNames
        .concat(activatedDLC[i].killerPerks)
        .sort();
    }
  }

  nonToxicChallenges = regenerateNonToxicChallenges();
  allChallenges = regenerateAllChallenges(nonToxicChallenges);
  for (var i = 0; i < arr.length; i++) {
    var cell = document.getElementById(arr[i]);
    var toxicityCheck = document.getElementById("toxic").checked;
    var rand = getRandomNumber(
      toxicityCheck ? allChallenges.length : nonToxicChallenges.length,
    );

    while (
      usedChallenges.includes(
        toxicityCheck ? allChallenges[rand] : nonToxicChallenges[rand],
      )
    ) {
      rand = getRandomNumber(
        toxicityCheck ? allChallenges.length : nonToxicChallenges.length,
      );
    }

    var pickedChallenge = toxicityCheck
      ? allChallenges[rand]
      : nonToxicChallenges[rand];

    cell.innerHTML = pickedChallenge;
    usedChallenges.push(pickedChallenge);

    cell.bgColor = "#060738";
    cell.style.textAlign = "center";
    cell.style.fontSize = 15 + "px";
    //console.log(window.getComputedStyle(cell).fontSize);
  }
  usedChallenges = [];
}

function dlcData(spanTitles) {
  var actDLC = [];

  for (var i = -2; i < spanTitles.length - 3; i++) {
    var killer = "The ";
    var killerPerks = [];
    var survivor = "";
    var survivorPerks = [];
    var survivor2 = "";
    var survivor2Perks = [];
    var activated = document.getElementById("ch" + i).checked;

    switch (i) {
      case -2:
        // No killer
        survivor = "William 'Bill' Overbeck";
        survivorPerks.push("Borrowed Time");
        survivorPerks.push("Left Behind");
        survivorPerks.push("Unbreakable");
        break;
      case -1:
        // No survivor
        killer += "Cannibal";
        killerPerks.push("Barbecue & Chilli");
        killerPerks.push("Franklin's Demise");
        killerPerks.push("Knock Out");
        break;
      case 0:
        // No killer
        survivor = "Ashley 'Ash' Joanna Williams";
        survivorPerks.push("Buckle Up");
        survivorPerks.push("Flip-Flop");
        survivorPerks.push("Mettle Of Man");
        break;
      case 1:
        killer += "Nurse";
        killerPerks.push("A Nurse's Calling");
        killerPerks.push("Stridor");
        killerPerks.push("Thanatophobia");
        survivor = "Nea Karlsson";
        survivorPerks.push("Balanced Landing");
        survivorPerks.push("Streetwise");
        survivorPerks.push("Urban Evasion");
        break;
      case 2:
        killer += "Shape";
        killerPerks.push("Dying Light");
        killerPerks.push("Play With Your Food");
        killerPerks.push("Save The Best For Last");
        survivor = "Laurie Strode";
        survivorPerks.push("Decisive Strike");
        survivorPerks.push("Object of Obsession");
        survivorPerks.push("Sole Survivor");
        break;
      case 3:
        killer += "Hag";
        killerPerks.push("Hex: Devour Hope");
        killerPerks.push("Hex: Ruin");
        killerPerks.push("Hex: The Third Seal");
        survivor = "Ace Visconti";
        survivorPerks.push("Ace In The Hole");
        survivorPerks.push("Open-Handed");
        survivorPerks.push("Up The Ante");
        break;
      case 4:
        killer += "Doctor";
        killerPerks.push("Monitor & Abuse");
        killerPerks.push("Overcharge");
        killerPerks.push("Overwhelming Presence");
        survivor = "Feng Min";
        survivorPerks.push("Alert");
        survivorPerks.push("Lithe");
        survivorPerks.push("Technician");
        break;
      case 5:
        killer += "Huntress";
        killerPerks.push("Beast Of Prey");
        killerPerks.push("Hex: Huntress Lullaby");
        killerPerks.push("Territorial Imperative");
        survivor = "David King";
        survivorPerks.push("Dead Hard");
        survivorPerks.push("No Mither");
        survivorPerks.push("We're Gonna Live Forever");
        break;
      case 6:
        killer += "Nightmare";
        killerPerks.push("Blood Warden");
        killerPerks.push("Fire Up");
        killerPerks.push("Remember Me");
        survivor = "Quentin Smith";
        survivorPerks.push("Pharmacy");
        survivorPerks.push("Vigil");
        survivorPerks.push("Wake Up!");
        break;
      case 7:
        killer += "Pig";
        killerPerks.push("Hangman's Trick");
        killerPerks.push("Make Your Choice");
        killerPerks.push("Surveillance");
        survivor = "David Tapp";
        survivorPerks.push("Detective's Hunch");
        survivorPerks.push("Stake Out");
        survivorPerks.push("Tenacity");
        break;
      case 8:
        killer += "Clown";
        killerPerks.push("Bamboozle");
        killerPerks.push("Coulrophobia");
        killerPerks.push("Pop Goes The Weasel");
        survivor = "Kate Denson";
        survivorPerks.push("Boil Over");
        survivorPerks.push("Dance With Me");
        survivorPerks.push("Windows Of Opportunity");
        break;
      case 9:
        killer += "Spirit";
        killerPerks.push("Hex: Haunted Ground");
        killerPerks.push("Rancor");
        killerPerks.push("Spirit Fury");
        survivor = "Adam Francis";
        survivorPerks.push("Autodidact");
        survivorPerks.push("Deliverance");
        survivorPerks.push("Diversion");
        break;
      case 10:
        killer += "Legion";
        killerPerks.push("Discordance");
        killerPerks.push("Iron Maiden");
        killerPerks.push("Mad Grit");
        survivor = "Jeff Johansen";
        survivorPerks.push("Aftercare");
        survivorPerks.push("Breakdown");
        survivorPerks.push("Distortion");
        break;
      case 11:
        killer += "Plague";
        killerPerks.push("Corrupt Intervention");
        killerPerks.push("Dark Devotion");
        killerPerks.push("Infectious Fright");
        survivor = "Jane Romero";
        survivorPerks.push("Head On");
        survivorPerks.push("Poised");
        survivorPerks.push("Solidarity");
        break;
      case 12:
        killer += "Ghost Face";
        killerPerks.push("Furtive Chase");
        killerPerks.push("I'm All Ears");
        killerPerks.push("Thrilling Tremors");
        break;
      case 13:
        // Two survivors
        killer += "Demogorgan";
        killerPerks.push("Cruel Limits");
        killerPerks.push("Mindbreaker");
        killerPerks.push("Surge");
        survivor = "Nancy Wheeler";
        survivorPerks.push("Better Together");
        survivorPerks.push("Fixated");
        survivorPerks.push("Inner Strength");
        survivor2 = "Steve Harrington";
        survivor2Perks.push("Babysitter");
        survivor2Perks.push("Camaraderie");
        survivor2Perks.push("Second Wind");
        break;
      case 14:
        killer += "Oni";
        killerPerks.push("Blood Echo");
        killerPerks.push("Nemesis");
        killerPerks.push("Zanshin Tactics");
        survivor = "Yui Kimura";
        survivorPerks.push("Any Means Necessary");
        survivorPerks.push("Breakout");
        survivorPerks.push("Lucky Break");
        break;
      case 15:
        killer += "Deathslinger";
        killerPerks.push("Dead Man's Switch");
        killerPerks.push("Gearhead");
        killerPerks.push("Hex: Retribution");
        survivor = "Zarina Kassir";
        survivorPerks.push("For The People");
        survivorPerks.push("Off The Record");
        survivorPerks.push("Red Herring");
        break;
      case 16:
        killer += "Executioner";
        killerPerks.push("Deathbound");
        killerPerks.push("Forced Penance");
        killerPerks.push("Trail Of Torment");
        survivor = "Cheryl Mason";
        survivorPerks.push("Blood Pact");
        survivorPerks.push("Repressed Alliance");
        survivorPerks.push("Soul Guard");
        break;
      case 17:
        killer += "Blight";
        killerPerks.push("Dragon's Grip");
        killerPerks.push("Hex: Blood Favor");
        killerPerks.push("Hex: Undying");
        survivor = "Felix Richter";
        survivorPerks.push("Built To Last");
        survivorPerks.push("Desperate Measures");
        survivorPerks.push("Visionary");
        break;
      case 18:
        killer += "Twins";
        killerPerks.push("Coup de GrÃ¢ce");
        killerPerks.push("Hoarder");
        killerPerks.push("Oppression");
        survivor = "Ã‰lodie Rakoto";
        survivorPerks.push("Appraisal");
        survivorPerks.push("Deception");
        survivorPerks.push("Power Struggle");
        break;
      case 19:
        killer += "Trickster";
        killerPerks.push("Hex: Crowd Control");
        killerPerks.push("No Way Out");
        killerPerks.push("Starstruck");
        survivor = "Yun-Jin Lee";
        survivorPerks.push("Fast Track");
        survivorPerks.push("Self-Preservation");
        survivorPerks.push("Smash Hit");
        break;
    }

    actDLC.push({
      killer: killer.length < 5 ? "" : killer,
      killerPerks: killerPerks,
      survivor: survivor,
      survivorPerks: survivorPerks,
      survivor2: survivor2,
      survivor2Perks: survivor2Perks,
      activated: activated,
    });
  }
  return actDLC;
}

function copySeed() {
  var copyText = document.getElementById("seed");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function populateDLCSpanTitles() {
  var chapterNames = [
    "PARAGRAPH I: Left Behind",
    "PARAGRAPH II: LEATHERFACE",
    "PARAGRAPH III: Ash vs Evil Dead",
    "CHAPTER I: The Last Breath Chapter",
    "CHAPTER II: The HALLOWEEN Chapter",
    "CHAPTER III: Of Flesh and Mud",
    "CHAPTER IV: Spark of Madness",
    "CHAPTER V: A Lullaby for the Dark",
    "CHAPTER VI: A Nightmare on Elm Street",
    "CHAPTER VII: The SAW Chapter",
    "CHAPTER VIII: Curtain Call",
    "CHAPTER IX: Shattered Bloodline",
    "CHAPTER X: Darkness Among Us",
    "CHAPTER XI: Demise of the Faithful",
    "CHAPTER XII: Ghost Face",
    "CHAPTER XIII: Stranger Things",
    "CHAPTER XIV: Cursed Legacy",
    "CHAPTER XV: Chains of Hate",
    "CHAPTER XVI: Silent Hill",
    "CHAPTER XVII: Descend Beyond",
    "CHAPTER XVIII: A Binding of Kin",
    "CHAPTER XIX: All-Kill",
  ];
  var s1 = '<li><input type="checkbox" id="ch';
  var s2 = '" name="ch';
  var s3 = '">\n<label for="ch';
  var s4 = '"><span title="Killer and Perks: &#013;';
  var s5 = " &#013;Survivor and Perks: &#013;";
  var s6 = '">';
  var s7 = "</span></label></li><br>";
  var counter = -2;
  var retVal =
    '<ul><li><input type="checkbox" id="selectAll" name="selectAll"><label for="selectAll">SELECT ALL</label></li><br>';

  for (var i = 0; i < chapterNames.length; i++) {
    retVal += s1 + counter + s2 + counter + s3 + counter + s4;
    switch (counter) {
      case -2:
        retVal +=
          "No killer in this paragraph " +
          s5 +
          "William 'Bill' Overbeck: Borrowed Time, Left Behind, Unbreakable";
        break;
      case -1:
        retVal +=
          "The Cannibal: Barbecue & Chilli, Franklin's Demise, Knock Out" +
          s5 +
          "No survivor in this paragraph ";
        break;
      case 0:
        retVal +=
          "No killer in this paragraph " +
          s5 +
          "Ashley 'Ash' Joanna Williams: Buckle Up, Flip-Flop, Mettle Of Man";
        break;
      case 1:
        retVal +=
          "The Nurse: A Nurse's Calling, Stridor, Thanatophobia" +
          s5 +
          "Nea Karlsson: Balanced Landing, Streetwise, Urban Evasion";
        break;
      case 2:
        retVal +=
          "The Shape: Dying Light, Play With Your Food, Save The Best For Last" +
          s5 +
          "Laurie Strode: Decisive Strike, Object of Obsession, Sole Survivor";
        break;
      case 3:
        retVal +=
          "The Hag: Hex: Devour Hope, Hex: Ruin, Hex: The Third Seal" +
          s5 +
          "Ace Visconti: Ace In The Hole, Open-Handed, Up The Ante";
        break;
      case 4:
        retVal +=
          "The Doctor: Monitor & Abuse, Overcharge, Overwhelming Presence" +
          s5 +
          "Feng Min: Alert, Lithe, Technician";
        break;
      case 5:
        retVal +=
          "The Huntress: Beast Of Prey, Hex: Huntress Lullaby, Territorial Imperative" +
          s5 +
          "David King: Dead Hard, No Mither, We're Gonna Live Forever";
        break;
      case 6:
        retVal +=
          "The Nightmare: Blood Warden, Fire Up, Remember Me" +
          s5 +
          "Quentin Smith: Pharmacy, Vigil, Wake Up!";
        break;
      case 7:
        retVal +=
          "The Pig: Hangman's Trick, Make Your Choice, Surveillance" +
          s5 +
          "David Tapp: Detective's Hunch, Stake Out, Tenacity";
        break;
      case 8:
        retVal +=
          "The Clown: Bamboozle, Coulrophobia, Pop Goes The Weasel" +
          s5 +
          "Kate Denson: Boil Over, Dance With Me, Windows Of Opportunity";
        break;
      case 9:
        retVal +=
          "The Spirit: Hex: Haunted Ground, Rancor, Spirit Fury" +
          s5 +
          "Adam Francis: Autodidact, Deliverance, Diversion";
        break;
      case 10:
        retVal +=
          "The Legion: Discordance, Iron Maiden, Mad Grit" +
          s5 +
          "Jeff Johansen: Aftercare, Breakdown, Distortion";
        break;
      case 11:
        retVal +=
          "The Plague: Corrupt Intervention, Dark Devotion, Infectious Fright" +
          s5 +
          "Jane Romero: Head On, Poised, Solidarity";
        break;
      case 12:
        retVal +=
          "The Ghost Face: Furtive Chase, I'm All Ears, Thrilling Tremors" +
          s5 +
          "No survivor in this chapter";
        break;
      case 13:
        retVal +=
          "The Demogorgan: Cruel Limits, Mindbreaker, Surge" +
          s5 +
          "Nancy Wheeler: Better Together, Fixated, Inner Strength &#013;Steve Harrington: Babysitter, Camaraderie, Second Wind";
        break;
      case 14:
        retVal +=
          "The Oni: Blood Echo, Nemesis, Zanshin Tactics" +
          s5 +
          "Yui Kimura: Any Means Necessary, Breakout, Lucky Break";
        break;
      case 15:
        retVal +=
          "The Deathslinger: Dead Man's Switch, Gearhead, Hex: Retribution" +
          s5 +
          "Zarina Kassir: For The People, Off The Record, Red Herring";
        break;
      case 16:
        retVal +=
          "The Executioner: Deathbound, Forced Penance, Trail Of Torment" +
          s5 +
          "Cheryl Mason: Blood Pact, Repressed Alliance, Soul Guard";
        break;
      case 17:
        retVal +=
          "The Blight: Dragon's Grip, Hex: Blood Favor, Hex: Undying" +
          s5 +
          "Felix Richter: Built To Last, Desperate Measures, Visionary";
        break;
      case 18:
        retVal +=
          "The Twins: Coup de GrÃ¢ce, Hoarder, Oppression" +
          s5 +
          "Ã‰lodie Rakoto: Appraisal, Deception, Power Struggle";
        break;
      case 19:
        retVal +=
          "The Trickster: Hex: Crowd Control, No Way Out, Starstruck" +
          s5 +
          "Yun-Jin Lee: Fast Track, Self-Preservation, Smash Hit";
        break;
    }
    retVal += s6 + chapterNames[counter + 2] + s7;
    counter++;
  }
  return retVal + "</ul>";
}

var seed = getRandomNumber(
  2147483647 * (Math.floor(Math.random() * 2) == 0 ? -1 : 1),
).toString();

Math.seedrandom(seed);

var activatedDLC = [];

var baseSurvivorPerkNames = [
  "Dark Sense",
  "DÃ©jÃ  Vu",
  "Hope",
  "Kindred",
  "Lightweight",
  "No One Left Behind",
  "Plunderer's Instinct",
  "Premonition",
  "Resilience",
  "Slippery Meat",
  "Small Game",
  "Spine Chill",
  "This Is Not Happening",
  "We'll Make It",
];

var baseSurvivorNames = [
  "Dwight Thomas",
  "Meg Thomas",
  "Claudette Morel",
  "Jake Park",
  "Nea Thompson",
  "David King",
  "Feng Min",
];

var allSurvivorPerkNames = [].concat(baseSurvivorPerkNames);

var baseKillerPerkNames = [
  "Bitter Murmur",
  "Deerstalker",
  "Distressing",
  "Hex: No One Escapes Death",
  "Hex: Thrill of the Hunt",
  "Insidious",
  "Iron Grasp",
  "Monstrous Shrine",
  "Sloppy Butcher",
  "Spies from the Shadows",
  "Unrelenting",
  "Whispers",
];

var allKillerPerkNames = []; //.concat(baseKillerPerkNames);

var allSurvivorNames = []; //.concat(baseSurvivorNames);

var allKillerNames = [];

var allSpanTitleNames = [];

var nonToxicChallenges = regenerateNonToxicChallenges();

var allChallenges = regenerateAllChallenges();

var usedChallenges = [];

var allCells = [];

var arr = [];

var toxicAlertCounter = 0;

window.onload = function () {
  var seedText = document.getElementById("seed");
  var freespace = document.getElementById("freespace");
  var toxicityCheck = document.getElementById("toxic");
  var spanTitles = document.getElementById("spantitles");
  var collapsibleElements = document.getElementsByClassName("collapsible");

  spanTitles.innerHTML = populateDLCSpanTitles();
  allSpanTitleNames = document.getElementsByTagName("li");
  for (var i = 0; i < collapsibleElements.length; i++) {
    collapsibleElements[i].addEventListener("click", function () {
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  // Adds each id to arr in string form
  for (var i = 1; i < 6; i++) {
    for (var j = 1; j < 6; j++) {
      var letter = "a";
      switch (i) {
        case 2:
          letter = "b";
          break;
        case 3:
          letter = "c";
          break;
        case 4:
          letter = "d";
          break;
        case 5:
          letter = "e";
          break;
        default:
          letter = "a";
          break;
      }
      if (letter + j != "c3") arr.push(letter + j);
    }
  }

  // Sets each tile on initial generation to non-toxic challenges as well
  // as setting background cell color and centers the challenge text
  seedText.value = seed;
  generateButtonClick(seedText, true, activatedDLC, allSpanTitleNames);

  // Center BPS image in C3 cell and centers text
  freespace.style.textAlign = "center";
  freespace.innerHTML = "FREE SPACE";

  // BEGINNING OF BINGO TILE GENERATION //

  document.getElementById("generate").onclick = function () {
    seedText.value = seed;
    generateButtonClick(seedText, false, activatedDLC, allSpanTitleNames);
  };

  // END OF BINGO TILE GENERATION //

  // Change background color of cell if clicked so users can keep track of completed tiles
  for (var i = 0; i < arr.length; i++) {
    allCells.push(document.getElementById(arr[i]));
  }
  document.getElementById("c3").style.backgroundColor = "#630000";

  allCells.forEach.call(document.getElementsByTagName("td"), function (item) {
    if (arr.includes(item.id)) {
      item.addEventListener("click", function () {
        item.bgColor = item.bgColor == "#630000" ? "#060738" : "#630000";
      });
    }
  });

  toxicityCheck.addEventListener("change", function () {
    if (this.checked && toxicAlertCounter <= 0) {
      alert(
        "Oh, so you TOXIC toxic. Please remember to be respectful to your fellow killers" +
          " in these trying times. Preferably you'd use this only in Kill Your Friends, but we all" +
          ' know people like YOU exist...\n\nDon\'t forget to click "Generate New Sheet"!',
      );
      toxicAlertCounter++;
    }
  });

  var selectAllDLCCheckboxes = document.getElementById("selectAll");
  selectAllDLCCheckboxes.addEventListener("change", function () {
    for (var i = -2; i < allSpanTitleNames.length - 3; i++) {
      document.getElementById("ch" + i).checked =
        selectAllDLCCheckboxes.checked;
    }
  });

  // DEBUGGING CODE THAT CHECKS FOR DUPLICATES //

  for (var i = 0; i < allCells.length; i++) {
    for (var j = 0; j < allCells.length; j++) {
      if (i == j) {
        break;
      }
      if (allCells[i].innerHTML == allCells[j].innerHTML) {
        allCells[i].bgColor = "#AAAAAA";
        allCells[j].bgColor = "#AAAAAA";
      }
    }
  }

  // END OF DUPLICATE CHECKING //

  seedText.value = seed;

  document.getElementById("inputSeed").onclick = function () {
    Math.seedrandom(seedText.value);
    generateButtonClick(seedText, true, activatedDLC, allSpanTitleNames);
  };

  // Collapsible DLC selector +/- Icon
  for (var i = 0; i < collapsibleElements.length; i++) {
    collapsibleElements[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
};
