namespace SpriteKind {
    export const npc1 = SpriteKind.create()
    export const big_seed = SpriteKind.create()
    export const Noc_2 = SpriteKind.create()
    export const mine = SpriteKind.create()
    export const mi_ne = SpriteKind.create()
}
// Chat of NPCs and doc
sprites.onOverlap(SpriteKind.Player, SpriteKind.Noc_2, function (sprite, otherSprite) {
    game.showLongText("Hello mate! Are you here for a job? I don't see many people around here.", DialogLayout.Top)
    pause(1000)
    story.showPlayerChoices("no I am not here for the job, I want to meet Mr.Auther-the businessman ", "")
    game.showLongText("Why did you come here then? He left me out here to repay for my mistake of defying his order. He never comes here.", DialogLayout.Top)
    pause(1000)
    story.showPlayerChoices("I'm here for information regarding his plans, his hideout and it's effect", "")
    game.showLongText("I know you are a environmentalist. Even I have disobeyed his orders , he didn't even care for me. I am his friend and he still locked me up here , do you also want to end up like me?  ", DialogLayout.Top)
    pause(1000)
    story.showPlayerChoices("No, but I have to try to stop his action that are effecting the environment.", "")
    game.showLongText("Well if you really want to stop him if you pass these 2 tests, I shall help you in your mission.", DialogLayout.Top)
    pause(1000)
    story.showPlayerChoices("Ok challange accepted ", "")
    game.showLongText("Ok now let's start. o through the challange block to teleport you there", DialogLayout.Top)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f f f . . 
        . . . . f f f f c c 7 7 7 7 f . 
        . . . . f c c c c 7 7 7 c 7 f . 
        . . . f f 7 7 7 7 7 7 7 7 c f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        f f f 7 7 7 5 7 7 7 5 5 5 7 f . 
        f 7 7 7 7 5 5 7 7 5 5 5 5 5 f f 
        f 7 7 7 5 5 5 5 5 5 5 5 5 5 f f 
        f 7 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 5 5 5 5 5 5 5 7 5 f 
        . . f f f 5 5 5 5 5 5 5 5 f f . 
        . . . . . f f f f f f 5 f . . . 
        . . . . . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        `, Cuser, 50, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.placeOnRandomTile(Cuser, sprites.castle.rock0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cuser.isHittingTile(CollisionDirection.Bottom)) {
        Cuser.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    LEVEL = 5
    LEVEL_CONTROL()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    LEVEL = 4
    LEVEL_CONTROL()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mi_ne, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
// Score change
sprites.onOverlap(SpriteKind.Player, SpriteKind.big_seed, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
// Chat of NPCs and doc
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc1, function (sprite, otherSprite) {
    game.showLongText("hello cuser we need you for something very important", DialogLayout.Top)
    pause(1000)
    story.showPlayerChoices("ok what is it", "")
    game.showLongText("I am an environmentalist and my name is Dr. Blora. I got to know that a puny businessman has been building a sky city. Now, all that is good but he has completely destroyed most of the ecosystem in the process", DialogLayout.Top)
    pause(1000)
    story.showPlayerChoices("Ok. But why are you telling me this?", "")
    game.showLongText("I'm assigning you this mission to stop his reign of terror over the nature. I don't know much about his plans and their effect. Ask Greg, the former friend of that businessman who defied the businessman's order and was forced to supervise a factory in the middle of nowhere. ", DialogLayout.Top)
    pause(1000)
    story.showPlayerChoices("Ok. I' ready to do this for Gaea (Noble choice)", "Ok. I'll do it to defeat the businessman so that I can get his money(Selfish choice)")
    game.showLongText("ok now you need to go across the sky soil biome... and also collect some seeds they may be in handy", DialogLayout.Top)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardSpike, function (sprite, location) {
    LEVEL = 6
    LEVEL_CONTROL()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (play_button == play_button && controller.anyButton.isPressed()) {
        LEVEL = 1
        LEVEL_CONTROL()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.placeOnRandomTile(Cuser, sprites.castle.rock0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    LEVEL = 3
    LEVEL_CONTROL()
})
function LEVEL_CONTROL () {
    if (LEVEL == 0) {
        scene.setBackgroundImage(assets.image`SAVING HOME`)
        play_button = sprites.create(assets.image`play button`, SpriteKind.Player)
        CURSOR = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . f 7 f . . . . 
            . . . . . . . . f 7 f . . . . . 
            . . . . . . . f 7 f f . . . . . 
            . . . . . . f 7 f 7 f . . . . . 
            . . . . . f 7 f 7 7 f . . . . . 
            . . . . f 7 f 7 f 7 f . . . . . 
            . . . . f f 7 7 7 f . . . . . . 
            . . . . 7 f f f f . . . . . . . 
            . . . 7 f 7 . . . . . . . . . . 
            . . 7 f 7 . . . . . . . . . . . 
            . . f 7 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        play_button.setPosition(75, 100)
        controller.moveSprite(CURSOR, 100, 100)
    }
    if (LEVEL == 1) {
        sprites.destroy(CURSOR)
        sprites.destroy(play_button)
        scene.setBackgroundImage(img`
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77766777777777677777777777777777777777777776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777766777777777677777777777777777777777777
            76667777777776677777777777777777777777677666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777676667777777776677777777777777777777777677
            77677667776677667777667777777777777777667767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667677667776677667777667777777777777777667
            66666677677667667767667777777777777766766666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666677677667667767667777777777777766766
            66666777667666667666677777777777776666776666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666777667666667666677777777777776666776
            66666766666666766666777677777766677766676666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666766666666766666777677777766677766676
            66666666666667766776666677666777667776666666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666667766776666677666777667776666
            66666666666667666677666776776677666666666666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666667666677666776776677666666666
            66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b66666666666666666666766777667666666666b66666666666666666666766777667666666666
            66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b677666666666666b6666666666666666666666b677666666666666
            66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb67666666666666b6666666666666666666666bb67666666666666
            66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb6666666666666b66666669bb666666669966bbb6666666666666
            66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb6666666666666b66666699dbb666666dd9666bb6666666666666
            6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666bb6669669966bbb69666d9966bb6666666666666
            6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666bb666d96696d9bbb9966d9966bbb666666666666
            6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666bb66dd9999d996bb99ddd96666bb666666666666
            bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bb666d9999d996bb99dd99669dbbb6696666666b
            bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbdd6d9999d999bbb9dd999996bbb6699966666b
            bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bb6ddd9999d9999bb9dd9999d6bbb9699666666b
            bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bb6ddd999d99999bbbdd9999d9bbb9999669966b
            bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbdddd999d999999bbdd9999d9bbbb9999d9996b
            bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999b9dddd99dd9999999bb9999dd9bbbb9999d9999b
            bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999b99ddddd999999999bbb999d999bbb9999d9999b
            bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bb99dddd9999999999dbbbbdd999bbb9999d999bb
            bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bb99ddd99999999999ddbbbb9999bbbb999d999bb
            bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bb99ddd99999999999ddbbbbbb99bbbb999d999bb
            b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b9999dd9999999999ddddbbbbbbbbbbbb999d99bb
            b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b9999ddd999999999dd99999bbbbbbbbb999d99bb
            b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb9999dddd99999999dd999999bbbbbbbb999d9bbb
            b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb
            dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbd99999ddddd9999ddd999999999bbbbb999bbbbd
            9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9d99999ddddddd9ddd9999999999bbbbb99bbbb99
            9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99d999999dddddddddd9999999999bbbbb99bbb999
            9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999d999999ddddddddd99999999999bbbbb99bb9999
            9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99dd99999ddddddd9999999999999bbbbb99bbd999
            99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd999dd9999dddddd99999999999999bbbbb99bbd999
            99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd99ddd999dddddd99999999999999bbbbb9bbbdd99
            9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9999dddddddddd9999999999999bbbbbb9bbb9d99
            9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9999dddddddddd9999999999999bbbbbbbbb99d99
            999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd99999dddddddd9999999999999bbbbbbbbb99dd9
            d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d9999999dddddd999999999999bbbbbbbbb9999dd
            dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999d9999999ddddd999999999999bbbbbbbbb99999d
            dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999d9999999ddddd999999999999bbbbbbbb999999d
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999d9999999ddddd99999999999bbbbbbbbb9999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999d9999999ddddd99999999999bbbbbbbbb9999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999d9999999ddddd99999999999bbbbbbbbb9999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999d9999999ddddd99999999999bbbbbbbbb9999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999dd999999ddddd99999999999bbbbbbbb99999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999dd999999ddddd99999999999bbbbbbbb99999999
            ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999dd999999ddddd99999999999bbbbbbbb9999999d
            dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999d9999999ddddd99999999999bbbbbbbb9999999d
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999d9999999dddddd9999999999bbbbbbbb9999999d
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999d9999999dddddd9999999999bbbbbbbb9999999d
            dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999d9999999dddddd9999999999bbbbbbb99999999d
            d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d99999999dddddd9999999999bbbbbbb9999999dd
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd99999999dddddd9999999999bbbbbbb999999ddd
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd99999999dddddd9999999999bbbbbbb999999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd99999999ddddddd999999999bbbbbbb99999ddd9
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd99999999ddddddd999999999bbbbbbb99999ddd9
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd99999999ddddddd999999999bbbbbbb99999ddd9
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd99999999dddddddd99999999bbbbbbb9999dddd9
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd99999999dddddddd99999999bbbbbbb9999dddd9
            999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd999999999dddddddd99999999bbbbbbb9999ddd99
            9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9999999999dddddddd999999bbbbbbbb9999ddd99
            d999999999dddd7777779999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd999999999dddddddd999999bbbbbbbbddddddddd
            ddddd99999dddd7777777777bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddddddd99999dddddddd999999bbbbbbbbbdddddddd
            dddddddd99dddd77777777777777bbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbdddddddddddddd99ddddddddd999ddbbbbbbbbbdddddddd
            dddddddddddddd777777777777777777bdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddddddddddddddddddddd9ddddbbbbbbb777777dddd
            dddddddddddddd7777777777777777777777ddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddddddddddddddd777777777777777777777777dddd
            dddddddddddddddd777777777777777777777777ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddddddd77777777777777777777777777777777dddd
            dddddddddddddddddddd77777777777777777777777ddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbb7777777777777777777777777777777777777777777dddd
            dddddddddddddddddddddddb77777777777777777777777ddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbdddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777dddd
            ddddddddddddddd77777777777777777777777777777777777777777dddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbdddddddddd7777777777777777777777777777777777777777777777777777777777777777777777ddddd
            ddddddddddddddd77777777777777777777777777777777777777777dddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777bdddddd
            ddddddddddddddd77777777777777777777777777777777777777777777ddddbbbbbbbbbbbbddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbdddddd
            ddddddddddddddd777777777777777777777777777777777777777777777777777777bbbbbbddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddd
            dddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddd
            dddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddd
            dddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddd
            ddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777d
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        tiles.setCurrentTilemap(tilemap`level11`)
        info.setLife(6)
        Cuser = sprites.create(assets.image`sprite`, SpriteKind.Player)
        Cuser.ay = 300
        Dr_Blora = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.npc1)
        tiles.placeOnRandomTile(Cuser, sprites.swamp.swampTile3)
        tiles.placeOnRandomTile(Dr_Blora, sprites.dungeon.chestClosed)
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            seeds = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . f 7 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . . f 7 7 7 7 f . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.big_seed)
            animation.runImageAnimation(
            seeds,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 7 7 7 f . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            true
            )
            tiles.placeOnTile(seeds, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    } else if (LEVEL == 3) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffffffccccccccccccccccccfffffffccccccccccccffffffffffcccccccccccccccfffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffccccccccccccccfffffffcccccccccccccccccccfffcccccccccccccccfffffffffccccccccccccccccffffffccccfff
            ffffffffffffffffffffffffffffffffccccccffccccccffffffffffffffffccccccccccccccccffffffffcccccccccfccccccccffccccccccccccccccfffffffccccccccccccccccccffffffccccfff
            ffffffcccccccffffffffffffffffffccccccccccccccccfffffffffffffccccccccccccccccccfffffffffcccccccfccccfccccffcccccccccccfccccffffffcccccccccccccccccccffffffccccfff
            ffffcccccccccccfffffffffffffffcccccccccccccccccfffffffffffffcccccccccccccccccffffffffffcccccccccccccccccffccccccccccccccccffffffcccccccccccccccccccffffffccccccc
            fffccccccccccccfffffffffffffffccccccccccccffcccfffffffffffffccccccccccccccccfffffffffffccccccccccccccccffffffcccccccccccccffffffcccccccccfcccccccccffffffccccccc
            fffccccccccccccccccccfffffffffcccccccccccccccccffffffffffffffcccccccccccccfffffffffffffcccccccccccccccfffffffccccccccccccffffffffcccccccccccccccccffffffffcccccc
            fffccccccccccccccccccffffffffffccccccccccccccccffffffffffffffffcccccccccccfffffffffffffccccccccfffffffffffffffffffccccccffffffffffffcccccccccccccffffffffffffccc
            fffffccccccccccccccccffffffffffccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccffffffffffffffffff
            fffffcccccccccccccccfffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffccccccfcccccffffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffccccfcccfffffffffffffffffffffffcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddffffffddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffddfffffffffffffffffffffffffffffffffdddddddffffffdddddffffffffffffffffffffffffffffffffffffffffffddddddddddfffffffffffff
            fffffffffffffffffffffffffffffffffffffffffdddddddddfffffffffffffffffffffffffffdddddddfffffffddddffffffffffffffffffffffffffffffffffffffffffddddddddddfffffffffffff
            fffffffffffffffffffffd1ffffffffffffffffffd11ddddddfffffffffffffffffffffffffffd11ddddfffffffdddddfffffffffffffffffff1dd1ffffffffffffffffffdd1d1dddddfffffffffffff
            fffffffffffffdddd1dddddffffffffffffffffffddddddd1dfffffffffffffffffffffffffffdddddddfffffdddddddfffffffffffffffffffddddffffffffffffffffffdddddd11ddfffffffffffff
            fffffffffffffddddddddddffffffffffffffffffdddddddddffffffffffdffffffffdfffffffd1dddddfffffdddddddfffffffffffffffffddddddffffffffffffffffffddddddddddfffffffffffff
            ffffffffffffdddddddd1d1ffffffffffffffffffdddddddddffffffffffdffffffffddddffffdddddddfffffdddddddfffffffffffffffffddd1d1ffffffffffffffffffdddd1dddddfffffffffffff
            ffffffffffffdddddddddddffffffffffffffffffddddddd1dfffffffffddffffffffdddddfffdddddddfffffdddddddfffffffffffffffffddddddffffffdffffffffffffdddddd1ddfffffffffffff
            ffffffffddd1ddddddd11ffffffdddfffffffffffdddddddddffdddddffddffffffffdddddfffdddddddfffffdddddddfffffffffddffffffddd1dffffffddffffffffffffdddddddddffddddddddfff
            d1ddffffddddddddddd1dddfffdddddffffffffffddddddd1dffd11ddffddffffffff1dd1dfffdddddddfffddddddddddfddfffffdddddddddddd1dffffddddfffffffffffddddd11ddfd11ddddddfff
            ddddfffffd1dd1dddddddddfffdddddffffffffffdddddddddffdddd1ffddffffffffdddddfffdd1ddddfffdddddddddddddfffffd1ddd1ddddddddffffddddfffffffffffdddddddddfdddd1ddddfff
            dd1dfffffddd1111dddddddfffdddddffffffffffdddddddddffdddd1ddddffffffffdddddfffdddddddfffddddddddddd1dfffffddd1d11dddddddffffddddffffffffffddddddddddfdddd1ddddfff
            ddddffffddddddddddddddddffddddddffddfddfdddddddddddfd11ddddddffffffffdddddfffdddddddfffdddddddddddddfffffdddddddddddddddffddddddfffdffdddddddddddddfd11ddddddfff
            dd1dffffddddddddddddddddffddddddffddddddddddddddddffdddddddddffffffffdddddfffdddddddfffddddddddddd1dffffddddddddddddddddffddddddfffddddddddddddddddfdddddddddfff
            ddddffdd1d1dddddddddddddffdddddddfdddd11ddddddddddddd11bbdddddddfffff1dd1dfffdddddddfffddddddddddddddfffdd1dddddddddddddffdddddddfffdffddddddbddddddd11bbbdddfdd
            dddddfddddddddddddddddddddffdddddfdddddddddbbbdddddddddbbbddddddfffffddddddffdddddddfffdddddddddddddddfdddddddddddddddddffdddddddfddddddddddbbdddddddddbbbdddfdd
            dddddfdddddddddddddddddddddfdddddfdddddddddbbbdddddddddbbbddddddddddddddddddddddddddfffdddddddddddddddfddddddddddddddddddddddddddfddddddddddbbdddddddddbbbdddddd
            dddddfddddddddddddddddddddddddddffdddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddffdddddddddddddddfddddddddddddddddddddddddddfdfddddddbbbbbbbdddddbbbbbddddd
            dddddbbbbbbbbbddddddddddddddddddffdddddddbbbbbbbddddddbbbbbdddddddddddddddddddddddddddfddddddddddddddbbbbbbbbbbddddddddddddddddddfddddddddbbbbbbbdddddbbbbbddddd
            dddddbbbbbbbbbddddddddddddddddddffdddddddbbbbbbbddddddbbbbbdddddddddddddddddddddddddddfddddddddddddddbbbbbbbbbbddddddddddddddddddfddddddddbbbbbbbdddddbbbbbddddd
            dddddbddbbbbbbddddddddddddddddddffdddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbddddfddddddddddddddbbdbdbbbbbddddddddddddddddddfddddddddbbbbbbbddddbbbbbbbb11d
            dddddbbbbbbbdbddddddddddddddddddffdddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbdddfddddddddddddddbbbbbbddbbddddddddddddddddddfddddddddbbbbbbbddddbbbbbbbbddd
            dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbdddfddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
            dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
            dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
            dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
            dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
            dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
            dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
            dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
            bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
        tiles.setCurrentTilemap(tilemap`level22`)
        tiles.placeOnRandomTile(Cuser, assets.tile`myTile5`)
        sprites.destroy(seeds)
        sprites.destroy(Dr_Blora)
        Cuser.ay = 300
    } else if (LEVEL == 4) {
        tiles.setCurrentTilemap(tilemap`level`)
        tiles.placeOnRandomTile(Cuser, assets.tile`myTile5`)
        sprites.destroy(seeds)
        Greg = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f d d b f e e f b d d f . 
            d f 4 9 9 9 9 9 9 4 f d . 
            d f e 9 9 9 9 9 9 e f d . 
            . d d 9 9 9 9 9 9 d d . . 
            f e f b 9 9 9 9 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.Noc_2)
        tiles.placeOnRandomTile(Greg, sprites.dungeon.doorOpenSouth)
    } else if (LEVEL == 5) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
            ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
            fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
            fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
            fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
            ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
            f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
            ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
            ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
            fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
            fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
            ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
            fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
            fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
            ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
            ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
            fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
            ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
            bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
            bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cb3bbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
            bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
            bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
            3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
            333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
            cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
            cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
            cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
            cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
            bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
            bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
            dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
            dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
            dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
            ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
            ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
            ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
            ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
            d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
            333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
            33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
            33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
            d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
            ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
            b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
            bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
            bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
            b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
            dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
            dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
            dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
            dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
            3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
            33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            `)
        tiles.setCurrentTilemap(tilemap`level24`)
        tiles.placeOnRandomTile(Cuser, sprites.castle.rock0)
        sprites.destroy(Greg)
        sprites.destroy(seeds)
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            seeds = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . f 7 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . . f 7 7 7 7 f . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.big_seed)
            animation.runImageAnimation(
            seeds,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 7 7 7 f . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            true
            )
            tiles.placeOnTile(seeds, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    } else if (LEVEL == 6) {
        scene.setBackgroundImage(img`
            8888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888555fffff58888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888855555555f55888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888855555555ff5888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888885f5555555ff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888885f55555555f888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888885f555555555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888885f555555555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888885ff55555555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888855ff5555558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888885555555588888888888111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888881111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            88881111888888888888888888888888888888888881188111111d8888888888888888888888888888888888888888888888888888888888888888888888888888888d88888888888888888888888888
            8881111111888888888888888888888888888888881111d1111111188888888888888888888888888888881111d88888888888888888888888888888881111d111111118888888888888888888888888
            88811111111d1188888888888888888888888888881111111111111d88888888888888888888888888811111111d11888888888888888888888888888d1111111111111d888888888888888888888888
            881111111111111888888888888888888888888811111111111111111d8888888888888888888888888111111111111888888888888888888888888d11111111111111111d8888888888888888888888
            1d1111111111111881118888888888888888888888888888888888888888888888888888888888881d1111111111111d8118888888888888888888888888888888888888888888886668888888888888
            1111111111111111111188888888888888888888888888888888888888888888888888888888888811111111111111111111888888888888888888888888888888888888888888867766888888888888
            1111111111166666111118888888888888888888888888888888888888888866777688888888888111111111111666661111888888888888888888888888888888888888888888667776888888888888
            88888111116677766118888888888888888888888888888888888888888888677776888888888811111111111166777661111111d8888888888888888888888888888888888888677776688888888888
            8888888886677777688888888888888888888888888888888888888888888867777788888888888888888888886777776688888888888888888888888888888888888888888888677777888888888888
            8888888886777777788888888888888888888888888888888888888888888867777788888888888888888888867777777688888888888888888888888888888888888888888888677777888888888888
            8888888886777777788888888888888888888888888888888888888888888867777788888888888888888888667777777668888888888888888888888888888888888888888888677777888888888888
            8888888887777777778888888888888888888888888888888888888888888867777788888888888888888888677777777768888888888888888888888888888888888888888888677777888888888888
            8888888887777777776888886888888888888888888888888888888888888867777788888888888888888888677777777768888668888888888888888888888888888888888888677777888888888888
            8888888887777777776888887688888888888888888888888888888888888867777788888888888888888888677777777768886776888888888888888888888888888888866888677777888888888888
            8888888887777777776888677668888888888888888888888888888867768867777788888888888888888888677777777768866776688888888888888888888888888888677688677777888888888888
            8888888887777777776888777768888888888888888888888888888867768867777768888888888888888888677777777768867777688888888888888888888888888888677688677777688888888888
            8888888887777777776888777768888888888888888888888888888867768867777768888888888888888888677777777768867777688888888888888888888888888888677688677777688888888888
            6666888887777777776666777768888888888666666888888888888867768867777768888888888666668888677777777766667777688888888886666668888888888888677688677777688888888886
            7776888887777777777777777768888888886666666688888888888867768867777768886688886677766888677777777777777777688888888866666666888888888888677688677777688866888866
            7777888887777777777777777688888888866666666668888888888867768867777768867668866777776888677777777777777776888888888666666666688888888888677688677777688676688667
            7777768887777777777777776688888888866666666668888888888867768867777768867768867777777688677777777777777766888888888666666666688888888888677688677777688677688677
            7777768887777777776888688888888888666666666668888888888867768867777768867768867777777688677777777766666668888888886666666666688888888888677688677777688677688677
            7777778887777777776888888888888888666666666668888888888867776667777768677768867777777768677777777768888888888888886666666666688888888888677766677777686777688677
            7777778887777777778888888888888888666666666666888888888866777777777766677766667777777768677777777768888888888888886666666666668888888888667777777777666777666677
            7777778887777777778888866666666888666666666666888888888886677777777776677666677777777768677777777768886666666668886666666666668888888888866777777777766776666777
            7777778887777777778888877777776668666666666666888888888888666677777777777666677777777766677777777768666777777766686666666666668888888888886666777777777776666777
            7777776667777777776667777777777766666666666666888866666688888677777777777666677777777766677777777766677777777777666666666666668888666666888886777777777776666777
            7777776667777777776677777777777776666666666666866677777666888677777777776666677777777766677777777766777777777777766666666666668666777776668886777777777766666777
            7777777667777777776777777777777777666666666666667777777776688677777766666666677777777776677777777767777777777777776666666666666677777777766886777777666666666777
            7777777667777777766777777777777777666666666666677777777777668677777766666666677777777776677777777667777777777777776666666666666777777777776686777777666666666777
            7777777667777777767777777777777777766666666666777777777777766677777766666666677777777776677777777677777777777777777666666666667777777777777666777777666666666777
            7777777667777777667777777777777777766666666666777777777777766677777766666666677777777776677777776677777777777777777666666666667777777777777666777777666666666777
            7777777667777777677777777777777777776666666666777777777777766677777766666666677777777776677777776777777777777777777766666666667777777777777666777777666666666777
            7777777667777733333333777777777777776666666666777777773333333377777766666666677777777776677777333333337777777777777766666666667777777733333333777777666666666777
            777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777
            7777777666333ddddddddddd33377777777766666666667777333ddddddddddd33376666666667777777777666333ddddddddddd33377777777766666666667777333ddddddddddd3337666666666777
            77777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd3336666666677777777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd33366666666777
            7777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd3333666667777777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd333366666777
            33777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd33333333333777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd333333333
            d33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33ddddd
            ddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333ddddddd
            ddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33dddddddddd
            ddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33dddddddddddd
            dddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddd
            dddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddd
            dddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddd
            dddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
        tiles.setCurrentTilemap(tilemap`level27`)
        tiles.placeOnRandomTile(Cuser, assets.tile`myTile12`)
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            seeds = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . f 7 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . f 7 f 7 7 7 7 f . . . . 
                . . . . . f 7 7 7 7 f . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.big_seed)
            animation.runImageAnimation(
            seeds,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 f 7 7 f . . . . . 
                . . . . . f 7 7 7 7 f . . . . . 
                . . . . . . f 7 7 f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 f 7 7 7 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . . f 7 7 7 f . . . . . . 
                . . . . . . f 7 f . . . . . . . 
                . . . . . . . f . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            true
            )
            tiles.placeOnTile(seeds, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
            mi_ne = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 2 2 2 . . . . . . 
                . . f f f f 2 2 2 f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                `, SpriteKind.mi_ne)
            tiles.placeOnTile(mi_ne, value)
        }
    }
    scene.cameraFollowSprite(Cuser)
    controller.moveSprite(Cuser, 100, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    gas = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    gas,
    [img`
        . . . . . . . . . . . . . . f f 
        . . . . . . . . . . . . . f f d 
        . . f f f f f f f f f f f f d d 
        . f f d d d d d d f f d f d d d 
        . f d d b b b c c d d d d d f f 
        f f d b b b d b b c d c b b d f 
        f d d b b d d c c c c c b c d d 
        f d c b b c c c d d d d c c b f 
        f d b b d c c c d c c c c d b f 
        f d b c d d d c c c c c c b b f 
        f d b b b c d d c c c d b b d f 
        f d d d b b b d c c c d b d d f 
        f f f d c c c b b b b b b d f f 
        . . f d d d d b d d d d f f f . 
        . . f f f f f d d d f f f . . . 
        . . . . . . f f f f f . . . . . 
        `],
    100,
    true
    )
    gas.setPosition(Cuser.vx + Cuser.vy, 80)
    gas.follow(Cuser)
})
let gas: Sprite = null
let mi_ne: Sprite = null
let Greg: Sprite = null
let seeds: Sprite = null
let Dr_Blora: Sprite = null
let CURSOR: Sprite = null
let play_button: Sprite = null
let Cuser: Sprite = null
let projectile: Sprite = null
let LEVEL = 0
LEVEL = 0
LEVEL_CONTROL()
// movement animations
forever(function () {
    characterAnimations.loopFrames(
    Cuser,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Cuser,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Cuser,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
})
