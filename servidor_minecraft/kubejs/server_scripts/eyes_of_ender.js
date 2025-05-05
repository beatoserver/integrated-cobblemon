// Modify existing recipes
ServerEvents.recipes(event => {


    event.shapeless(
        Item.of('endrem:guardian_eye'), // arg 1: output
        [
          'minecraft:ender_eye',
          'upgrade_aquatic:elder_eye'
        ]
      )



  event.shapeless(
      Item.of('endrem:exotic_eye'), // arg 1: output
      [
        '#quark:corundum_cluster',
        '#quark:trumpet_saplings',
        '#integrations:cave_material',
        'minecraft:amethyst_shard',
        'minecraft:ender_eye',
        'biomemakeover:illunite_shard',
        '#integrations:coral',
        'minecraft:oak_sapling',
        '#regions_unexplored:prismarite_crystals'
      ]
    )
})