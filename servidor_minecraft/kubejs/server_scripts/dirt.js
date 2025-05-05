// Modify existing recipes
ServerEvents.recipes(event => {
//Adding in QOL Dirt Recipes


event.shapeless(
  Item.of('minecraft:dirt'), // arg 1: output
  [
    'regions_unexplored:ashen_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:dirt'), // arg 1: output
  [
    'regions_unexplored:peat_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:coarse_dirt'), // arg 1: output
  [
    'regions_unexplored:peat_coarse_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:dirt'), // arg 1: output
  [
    'regions_unexplored:silt_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:coarse_dirt'), // arg 1: output
  [
    'regions_unexplored:silt_coarse_dirt'
  ]
),
event.shapeless(
  Item.of('minecraft:dirt'), // arg 1: output
  [
    'regions_unexplored:argillite'
  ]
),

event.shaped('8x regions_unexplored:silt_dirt', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:dirt', 
  B: 'regions_unexplored:barley'
}),
event.shaped('8x regions_unexplored:peat_dirt', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:dirt', 
  B: 'regions_unexplored:blackwood_sapling'
}),
event.shaped('8x regions_unexplored:argillite', [
  'AAA', 
  'ABA', 
  'AAA'  
], {
  A: 'minecraft:dirt', 
  B: 'regions_unexplored:dropleaf'
})
})