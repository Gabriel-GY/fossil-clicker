namespace SpriteKind {
    export const Tower = SpriteKind.create()
}
/**
 * Assistant: $10
 * 
 * Paleontologist: $100
 * 
 * Mining team: $700
 * 
 * Excavator: $26000
 * 
 * Submarine: $118000
 * 
 * Lab: $812000
 * 
 * Space ship: $2500000
 * 
 * Portal: $45000000
 * 
 * Particle accelerator: $35500000000
 * 
 * Multi-dimensional shovel: $217500000000
 */
function create_upgrades () {
    // Upgrade format:
    // title | description | $price | effect
    // 업그레이드 형식:
    // 제목 | 설명 | $가격 | 효과
    upgrades = [
        "Slightly bigger fossils | 조금 더 큰 화석은 판매 가격이 2배가 됩니다. | $50 | price*=2",
        "Somewhat bigger fossils | 꽤 큰 화석은 판매 가격이 2배가 됩니다. | $100 | price*=2",
        "Assistant raises | 보조원들이 2배 더 열심히 일합니다. | $75 | assistant*=2",
        "Assistant bonuses | 보너스를 받은 보조원들이 2배 더 열심히 일합니다. | $150 | assistant*=2",
        "Manual cleaning | 직접 클릭해서 청소한 화석은 4배의 돈을 벌어줍니다. | $300 | click*=4",
        "Coffee and tea stations | 카페인 덕분에 보조원들의 작업 속도가 50% 빨라집니다. | $100 | assistant*=1.5",
        "Upgraded tools | 고생물학자의 작업 속도가 25% 빨라집니다. | $200 | paleontologist*=1.25",
        "Assistant to the assistant | 보조원들이 더 귀찮은 일을 자기 보조원에게 맡겨 작업 속도가 2배가 됩니다. | $300 | assistant*=2",
        "Bigger fossils | 더 큰 화석은 판매 가격이 2배가 됩니다. | $600 | price*=2",
        "Paleontology PhD | 고생물학 박사 학위로 직접 클릭한 화석이 4배의 돈을 벌어줍니다. | $1800 | click*=4",
        "Assistant to the paleontologist | 고생물학자를 도와주는 보조원 덕분에 작업 속도가 50% 빨라집니다. | $1200 | paleontologist*=1.5",
        "Even bigger fossils | 더더욱 큰 화석은 판매 가격이 2배가 됩니다. | $2400 | price*=2",
        "Verification | 직접 클릭한 화석을 검증해서 4배의 돈을 벌어줍니다. | $3200 | click*=4",
        "Haste I | 발굴팀의 작업 속도가 20% 빨라집니다. | $5000 | mining_team*=1.2",
        "Haste II | 발굴팀의 작업 속도가 20% 더 빨라집니다. | $7500 | mining_team*=1.2",
        "Iron tools | 발굴팀의 작업 속도가 50% 빨라집니다. | $10000 | mining_team*=1.5",
        "Enhanced hydraulics | 굴착기의 작업 속도가 50% 빨라집니다. | $56000 | excavator*=1.5",
        "Overvolt | 굴착기에 더 강한 전압을 사용해 작업 속도가 25% 빨라집니다. | $75000 | excavator*=1.5",
        "Upgraded cooling | 굴착기의 냉각 장치를 업그레이드해 작업 속도가 25% 빨라집니다. | $75000 | excavator*=1.5",
        "Round-the-clock shifts | 굴착기가 24시간 쉬지 않고 작동해 속도가 2배가 됩니다. | $225000 | excavator*=2",
        "Careful touch | 조심스럽게 클릭한 화석은 4배의 돈을 벌어줍니다. | $500000 | click*=4",
        "Feather touch | 아주 살짝 클릭한 화석은 4배의 돈을 벌어줍니다. | $600000 | click*=4",
        "Gold touch | 황금 손길로 클릭한 화석은 4배의 돈을 벌어줍니다. | $800000 | click*=4",
        "Popularity | 화석이 엄청난 인기를 얻어 판매 가격이 25% 올라갑니다. | $850000 | price*=1.25",
        "Upgraded robot hands | 잠수함의 로봇 팔을 업그레이드해 작업 속도가 25% 빨라집니다. | $190000 | submarine*=1.25",
        "Popularity II | 화석이 더욱 인기를 얻어 판매 가격이 25% 올라갑니다. | $100000 | price*=1.25",
        "Even BIGGER fossils | 훨씬 더 BIG한 화석은 판매 가격이 2배가 됩니다. | $125000 | price*=2",
        "Better buoyancy | 잠수함이 더 깊이 잠수해 화석을 25% 더 많이 찾습니다. | $280000 | submarine*=1.25",
        "Enhanced propellers | 잠수함의 프로펠러가 더 빨리 돌아 화석을 25% 더 많이 찾습니다. | $370000 | submarine*=1.25",
        "Diamond tools | 발굴팀의 작업 속도가 50% 빨라집니다. | $100000 | mining_team*=1.5",
        "TNT | 발굴팀이 TNT를 사용할 수 있어 작업 속도가 25% 빨라집니다. | $250000 | mining_team*=1.25",
        "Upgraded equipment | 연구실의 작업 속도가 25% 빨라집니다. | $1500000 | lab*=1.25",
        "EVEN BIGGER fossils | EVEN BIGGER 화석은 판매 가격이 2배가 됩니다. | $1400000 | price*=2",
        "Strengthened hull | 잠수함의 선체를 더 튼튼하게 만들어 더 깊이 잠수하고 화석을 25% 더 많이 찾습니다. | $786000 | submarine*=1.25",
        "Diamond touch | 다이아몬드 손길로 클릭한 화석은 4배의 돈을 벌어줍니다. | $4500000 | click*=4",
        "Lab assistants | 연구실 보조원 덕분에 연구실의 작업 속도가 50% 빨라집니다. | $20000000 | lab*=1.5",
        "Nuclear-powered submarines | 원자력 잠수함이 더 오래, 더 빠르게 움직여 속도가 50% 빨라집니다. | $22000000 | submarine*=1.5",
        "Bring your children to work day | 아이들과 함께 출근합니다. 연구실 속도는... 그대로입니다! | $150000000 | lab*=1",
        "Super big fossils | 엄청나게 큰 화석은 판매 가격이 2배가 됩니다. | $175000000 | price*=2",
        "Larger labs | 더 큰 연구실 덕분에 작업 속도가 25% 빨라집니다. | $225000000 | lab*=1.25",
        "Precision equipment | 정밀 장비를 사용해 연구실의 작업 속도가 25% 빨라집니다. | $25000000 | lab*=1.25",
        "SUPER big fossils | SUPER BIG 화석은 판매 가격이 2배가 됩니다. | $25000000 | price*=2",
        "Larger space ships | 더 큰 우주선이 화석을 더 많이 가져와 작업 속도가 25% 빨라집니다. | $300000000 | space_ship*=1.25",
        "Double-armed excavators | 굴착기에 팔 하나를 더 달아 작업 속도가 2배가 됩니다. | $2250000000 | excavator*=2",
        "3D printers | 3D 프린터 덕분에 연구실의 작업 속도가 25% 빨라집니다. | $250000000 | lab*=1.25",
        "Signed fossils | 사인이 들어간 화석은 직접 클릭하면 4배의 돈을 벌어줍니다. | $750000000 | click*=4",
        "SUPER BIG fossils | SUPER BIG 화석은 판매 가격이 2배가 됩니다. | $2500000000 | price*=2",
        "Expanded maps | 지도를 확장해 우주선의 속도가 25% 빨라집니다. | $3000000000 | space_ship*=1.25",
        "SUPER DUPER BIG fossils | SUPER DUPER BIG 화석은 판매 가격이 2배가 됩니다. | $27500000000 | price*=2",
        "Premium fuel | 고급 연료를 사용해 우주선의 속도가 25% 빨라집니다. | $350000000000 | space_ship*=1.25",
        "SUPER DUPER UBER BIG fossils | SUPER DUPER UBER BIG 화석은 판매 가격이 2배가 됩니다. | $700000000000 | price*=2",
        "SUPER DUPER OMEGA fossils | SUPER DUPER OMEGA 화석은 판매 가격이 2배가 됩니다. | $1400000000000 | price*=2",
        "Humongous fossils | 어마어마하게 큰 화석은 판매 가격이 2배가 됩니다. | $5200000000000 | price*=2",
        "Stronger magnets | 더 강한 자석으로 입자가속기의 속도가 25% 빨라집니다. | $15000000000000 | particle_accelerator*=1.25",
        "Your fingerprints on fossils | 손자국이 찍힌 화석은 직접 클릭하면 4배의 돈을 벌어줍니다. | $10000000000000 | click*=4",
        "Increased eV | 입자가속기가 50% 더 큰 입자도 충돌시킬 수 있습니다. | $22500000000000 | particle_accelerator*=1.5",
        "??? | ??? | $100000000000000 | assistant*=100000000000000",
        "hUMONGOUS FOSSILS | hUMONGOUS 화석은 판매 가격이 2배가 됩니다. | $55500000000000 | price*=2",
        "Impossibly-sized fossils | 말도 안 되게 큰 화석은 판매 가격이 2배가 됩니다. | $60000000000000 | price*=2",
        "Multi-continental colliders | 대륙만 한 충돌기가 만들어져 화석을 10배나 얻습니다! | $6000000000000000 | particle_accelerator*=10",
        "City-sized fossils | 도시만 한 화석은 판매 가격이 2배가 됩니다. | $120000000000000 | price*=2",
        "Colliders...in space??? | 우주에 있는 충돌기는 어쩐지 성능이 2배나 좋습니다. | $150000000000000 | particle_accelerator*=10",
        "5-dimensional shovels | 5차원 삽으로 화석을 2배 더 많이 얻습니다. | $217500000000000 | md_shovel*=2",
        "6-dimensional shovels | 6차원 삽으로 화석을 2배 더 많이 얻습니다. | $897500000000000 | md_shovel*=2",
        "7-dimensional shovels | 7차원 삽으로 화석을 2배 더 많이 얻습니다. | $3050000000000000 | md_shovel*=2",
        "Country-sized fossils | 나라만 한 화석은 판매 가격이 2배가 됩니다. | $3000000000000000 | price*=2",
        "Colliders in reality holes | 좋아, 이쯤 되면 너무 말도 안 되네요. | $30000000000000000 | particle_accelerator*=2",
        "8-dimensional shovels | 8차원 삽으로 화석을 2배 더 많이 얻습니다. | $560000000000000000 | md_shovel*=2",
        "9-dimensional shovels | 9차원 삽으로 화석을 2배 더 많이 얻습니다. | $2320000000000000000 | md_shovel*=2",
        "Continental fossils | 대륙만 한 화석은 판매 가격이 무려 99배가 됩니다. | $5000000000000000000 | price*=99",
        "Earth-sized fossils | 지구만 한 화석은 판매 가격이 무려 99배가 됩니다. | $10000000000000000000 | price*=99",
        "Gas-giant fossils??? | 가스 행성에서 가져온 화석은 판매 가격이 99배가 됩니다. | $100000000000000000000 | price*=99",
        "Sun-sized fossils | 태양만 한 화석은 판매 가격이 99배가 됩니다. | $1000000000000000000000 | price*=99",
        "Solar-system sized fossils | 태양계만 한 화석은 판매 가격이 999배입니다. 이런 걸 누가 사는 거지? | $100000000000000000000000 | price*=999",
        "Galaxy-sized fossils | 은하만 한 화석은 판매 가격이 9999배가 됩니다. | $10000000000000000000000000 | price*=9999",
        "Universe-sized fossils | 우주만 한 화석은 판매 가격이 99999배가 됩니다. | $1000000000000000000000000000 | price*=99999"
    ]
    if (DEBUG) {
        upgrades_purchased = upgrades
    } else {
        upgrades_purchased = []
    }
    sprite_upgrades_button = sprites.create(assets.image`upgrades_button`, SpriteKind.Player)
    sprite_upgrades_button.left = 48
    sprite_upgrades_button.bottom = 118
}
function format_money (money: number) {
    return "$" + round_to(money / short_scale_divider(money), 2) + short_scale_name(money)
}
function show_upgrades_menu (transition: boolean) {
    enable_cursor(false)
    menu_items_upgrades = [miniMenu.createMenuItem("Cancel")]
    for (let value of upgrades) {
        // Upgrade format:
        // title | description | $price | effect*=x
        local_upgrade = value.split(" | ")
        local_price = parseFloat(local_upgrade[2].substr(1, local_upgrade[2].length - 1))
        menu_items_upgrades.push(miniMenu.createMenuItem("" + local_upgrade[0] + " (" + format_money(local_price) + ") - " + local_upgrade[1]))
    }
    menu_upgrades = miniMenu.createMenuFromArray(menu_items_upgrades)
    menu_upgrades.setTitle("Upgrades (" + upgrades_purchased.length + "/" + (upgrades.length + upgrades_purchased.length) + ")")
    menu_upgrades.left = 45
    menu_upgrades.top = 31
    menu_upgrades.setDimensions(115, 89)
    menu_upgrades.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 1)
    menu_upgrades.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, images.colorBlock(15))
    menu_upgrades.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, images.colorBlock(1))
    menu_upgrades.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, images.colorBlock(15))
    menu_upgrades.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, images.colorBlock(14))
    menu_upgrades.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, images.colorBlock(1))
    menu_upgrades.onButtonPressed(controller.A, function (selection, selectedIndex) {
        last_menu_index = selectedIndex
        if (selection.includes("Cancel")) {
            slide_out_menu(menu_upgrades)
            timer.background(function () {
                pauseUntil(() => !(controller.A.isPressed()))
                enable_cursor(true)
            })
            return
        } else {
            local_upgrade = upgrades[selectedIndex - 1].split(" | ")
            local_price = parseFloat(local_upgrade[2].substr(1, local_upgrade[2].length - 1))
            if (money >= local_price) {
                upgrades_purchased.push(upgrades.removeAt(selectedIndex - 1))
                money += local_price * -1
            } else {
                game.showLongText("Not enough money! (Price of " + format_money(local_price) + ")", DialogLayout.Bottom)
                return
            }
        }
        sprites.destroy(menu_upgrades)
        show_upgrades_menu(false)
    })
    menu_upgrades.onButtonPressed(controller.B, function (selection, selectedIndex) {
        last_menu_index = 0
        slide_out_menu(menu_upgrades)
        timer.background(function () {
            pauseUntil(() => !(controller.B.isPressed()))
            enable_cursor(true)
        })
    })
    menu_upgrades.setButtonEventsEnabled(false)
    for (let index = 0; index < Math.min(last_menu_index, menu_items_upgrades.length - 1); index++) {
        menu_upgrades.moveSelection(miniMenu.MoveDirection.Down)
    }
    timer.background(function () {
        pauseUntil(() => !(controller.A.isPressed()))
        menu_upgrades.setButtonEventsEnabled(true)
    })
    if (transition) {
        slide_in_menu(menu_upgrades)
    }
}
function create_top_section () {
    text_sprite_money = create_label("", 3, 3)
    text_sprite_fossil_price = create_label("", 12, 3)
    text_sprite_fossils_per_second = create_label("", 21, 3)
}
function create_ui () {
    create_top_section()
    create_main_icon()
    create_towers()
    create_upgrades()
}
function create_label (text: string, top: number, left: number) {
    local_text_sprite = textsprite.create(text, 0, 15)
    local_text_sprite.top = top
    local_text_sprite.left = left
    local_text_sprite.setFlag(SpriteFlag.Ghost, !(DEBUG))
    local_text_sprite.setFlag(SpriteFlag.RelativeToCamera, true)
    return local_text_sprite
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursor_enabled) {
        if (sprite_cursor.overlapsWith(sprite_main_icon)) {
            click_main_icon()
        } else if (sprite_cursor.overlapsWith(sprite_upgrades_button)) {
            show_upgrades_menu(true)
        } else {
            for (let value of sprites_towers) {
                if (sprite_cursor.overlapsWith(value)) {
                    show_tower_menu([value], true)
                }
            }
        }
    }
})
function try_sell_tower (tower: Sprite, count: number) {
    if (sprites.readDataNumber(tower, "count") >= count) {
        money += calculate_sell_price([tower], count)
        sprites.changeDataNumberBy(tower, "count", count * -1)
        return true
    } else {
        game.showLongText("Not enough towers!", DialogLayout.Bottom)
        return false
    }
}
function short_scale_divider (num: number) {
    for (let index = 0; index <= short_scale_names.length; index++) {
        if (num < 10 ** ((index + 1) * 3) || index == short_scale_names.length - 1) {
            return 10 ** (index * 3)
        }
    }
    return 0
}
function slide_out_menu (menu: Sprite) {
    menu.vx = 10000
    menu.setFlag(SpriteFlag.AutoDestroy, true)
}
function create_towers () {
    sprites_towers = []
    create_tower("Assistant", 0.1, 47, 48, assets.image`assistant_icon`, assets.image`assistant_icon_selected`, 10, "assistant", "Assistant to help you out!")
    create_tower("Paleontologist", 1, 47, 70, assets.image`paleontologist_icon`, assets.image`paleontologist_icon_selected`, 100, "paleontologist", "A paleontologist to find fossils for you!")
    create_tower("Mining team", 12, 47, 92, assets.image`mining_team_icon`, assets.image`mining_team_icon_selected`, 700, "mining_team", "Mining teams go deeper in search of more fossils!")
    create_tower("Excavator", 86, 47, 114, assets.image`excavator_icon`, assets.image`excavator_icon_selected`, 26000, "excavator", "The excavator can dig out areas very quickly for even more fossils!")
    create_tower("Submarine", 270, 47, 136, assets.image`submarine_icon`, assets.image`submarine_icon_selected`, 118000, "submarine", "The submarine can go to the bottom of the oceans in search for fossils!")
    create_tower("Lab", 1980, 83, 48, assets.image`lab_icon`, assets.image`lab_icon_selected`, 812000, "lab", "Cloning fossils has never been easier!")
    create_tower("Space ship", 26450, 83, 70, assets.image`space_ship_icon`, assets.image`space_ship_icon_selected`, 2500000, "space_ship", "Space ships bring in fossils from other planets!")
    create_tower("Portal", 389000, 83, 92, assets.image`portal_icon`, assets.image`portal_icon_selected`, 45000000, "portal", "A portal to go back in time to gather more fossils!")
    create_tower("Particle accelerator", 6500000, 83, 114, assets.image`particle_accelerator_icon`, assets.image`particle_accelerator_icon_selected`, 35500000000, "particle_accelerator", "Apparently smashing particles yields fossils now.")
    create_tower("Multi-dimensional shovel", 390000000, 83, 136, assets.image`md_shovel_icon`, assets.image`md_shovel_icon_selected`, 217500000000, "md_shovel", "A shovel that tears into the fabric of reality to find more fossils. ")
}
function show_tower_menu (tower_in_list: Sprite[], transition: boolean) {
    enable_cursor(false)
    local_sprite = tower_in_list[0]
    menu_items_tower = [
    miniMenu.createMenuItem("Cancel"),
    miniMenu.createMenuItem("Buy 1 (" + format_money(calculate_buy_price(tower_in_list, 1)) + ")"),
    miniMenu.createMenuItem("Buy..."),
    miniMenu.createMenuItem("Buy max")
    ]
    if (sprites.readDataNumber(local_sprite, "count") > 0) {
        menu_items_tower.push(miniMenu.createMenuItem("Sell 1 (" + format_money(calculate_sell_price(tower_in_list, 1)) + ")"))
        menu_items_tower.push(miniMenu.createMenuItem("Sell..."))
        menu_items_tower.push(miniMenu.createMenuItem("Sell all"))
    }
    menu_tower = miniMenu.createMenuFromArray(menu_items_tower)
    menu_tower.setTitle("" + sprites.readDataString(local_sprite, "name") + " (" + sprites.readDataNumber(local_sprite, "count") + ") - " + sprites.readDataString(local_sprite, "description"))
    menu_tower.left = 45
    menu_tower.top = 31
    menu_tower.setDimensions(115, 89)
    menu_tower.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 1)
    menu_tower.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, images.colorBlock(15))
    menu_tower.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, images.colorBlock(1))
    menu_tower.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, images.colorBlock(15))
    menu_tower.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, images.colorBlock(14))
    menu_tower.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, images.colorBlock(1))
    menu_tower.onButtonPressed(controller.A, function (selection, selectedIndex) {
        last_menu_index = selectedIndex
        if (selection.includes("Cancel")) {
            slide_out_menu(menu_tower)
            timer.background(function () {
                pauseUntil(() => !(controller.A.isPressed()))
                enable_cursor(true)
            })
            return
        } else if (selection.includes("Buy 1")) {
            try_buy_tower(tower_in_list[0], 1, true)
        } else if (selection.includes("Buy...")) {
            while (true) {
                local_quantity = game.askForNumber("Purchase amount: (Blank to cancel)", 6)
                if (is_nan(local_quantity) || local_quantity == 0) {
                    break;
                }
                if (local_quantity < 0 || Math.round(local_quantity) != local_quantity) {
                    game.showLongText("Quantity must be a natural number!", DialogLayout.Bottom)
                    continue;
                }
                if (try_buy_tower(tower_in_list[0], local_quantity, true)) {
                    break;
                }
            }
        } else if (selection.includes("Buy max")) {
            menu_tower.setButtonEventsEnabled(false)
            local_buy = 1
            local_started = sprites.readDataNumber(tower_in_list[0], "count")
            while (try_buy_tower(tower_in_list[0], local_buy, false)) {
                local_buy += 1
            }
            for (let index = 0; index < local_buy; index++) {
                local_buy += -1
                if (try_buy_tower(tower_in_list[0], local_buy, false)) {
                    break;
                }
            }
            game.showLongText("Bought " + (sprites.readDataNumber(tower_in_list[0], "count") - local_started) + " towers.", DialogLayout.Bottom)
        } else if (selection.includes("Sell 1")) {
            try_sell_tower(tower_in_list[0], 1)
        } else if (selection.includes("Sell...")) {
            while (true) {
                local_quantity = game.askForNumber("Sell amount: (Blank to cancel)", 6)
                if (is_nan(local_quantity) || local_quantity == 0) {
                    break;
                }
                if (local_quantity < 0 || Math.round(local_quantity) != local_quantity) {
                    game.showLongText("Quantity must be a natural number!", DialogLayout.Bottom)
                    continue;
                }
                if (try_sell_tower(tower_in_list[0], local_quantity)) {
                    break;
                }
            }
        } else if (selection.includes("Sell all")) {
            local_started = sprites.readDataNumber(tower_in_list[0], "count")
            try_sell_tower(tower_in_list[0], sprites.readDataNumber(tower_in_list[0], "count"))
            game.showLongText("Sold " + local_started + " towers.", DialogLayout.Bottom)
        }
        slide_out_menu(menu_tower)
        show_tower_menu(tower_in_list, false)
    })
    menu_tower.onButtonPressed(controller.B, function (selection, selectedIndex) {
        last_menu_index = 0
        slide_out_menu(menu_tower)
        timer.background(function () {
            pauseUntil(() => !(controller.B.isPressed()))
            enable_cursor(true)
        })
    })
    menu_tower.setButtonEventsEnabled(false)
    for (let index = 0; index < Math.min(last_menu_index, menu_items_tower.length - 1); index++) {
        menu_tower.moveSelection(miniMenu.MoveDirection.Down)
    }
    timer.background(function () {
        pauseUntil(() => !(controller.A.isPressed()))
        menu_tower.setButtonEventsEnabled(true)
    })
    if (transition) {
        slide_in_menu(menu_tower)
    }
}
function create_main_icon () {
    sprite_main_icon = sprites.create(assets.image`shovel`, SpriteKind.Player)
    sprite_main_icon.left = 10
    sprite_main_icon.y = 85
}
function update_top_bar_text () {
    text_sprite_money.setText("Money: " + format_money(money))
    text_sprite_fossil_price.setText("Price: " + format_money(fossil_price))
    text_sprite_fossils_per_second.setText("F/s: " + round_to(fossils_per_second / short_scale_divider(fossils_per_second), 3) + short_scale_name(fossils_per_second))
}
function is_nan (num: number) {
    return num != num
}
function create_cursor () {
    sprite_cursor = sprites.create(assets.image`cursor_pixel`, SpriteKind.Player)
    sprite_cursor.setFlag(SpriteFlag.Invisible, true)
    sprite_cursor.setFlag(SpriteFlag.StayInScreen, true)
    sprite_cursor_image = sprites.create(assets.image`cursor_image`, SpriteKind.Player)
    sprite_cursor_image.setFlag(SpriteFlag.Ghost, true)
    sprite_cursor_image.z = 100
}
function save_game () {
    if (DEBUG) {
        return
    }
    blockSettings.writeNumber("money", money)
    // blockSettings.writeStringArray("upgrades", upgrades)
    blockSettings.writeStringArray("upgrades_purchased", upgrades_purchased)
    for (let value of sprites_towers) {
        blockSettings.writeNumber("count_" + sprites.readDataString(value, "internal_name"), sprites.readDataNumber(value, "count"))
    }
    blockSettings.writeBoolean("has_game_save", true)
    blockSettings.writeBoolean("auto_save", auto_save_enabled)
}
function calculate_sell_price (tower_in_list: Sprite[], count: number) {
    local_sprite = tower_in_list[0]
    local_sum = 0
    for (let index = 0; index <= count - 1; index++) {
        local_sum += primitive_tower_price(sprites.readDataNumber(local_sprite, "price"), sprites.readDataNumber(local_sprite, "count") - 1 - index)
    }
    return local_sum
}
function update_tower_button (text_sprite_in_list: Sprite[]) {
    local_sprite = text_sprite_in_list[0]
    local_sprite.sayText(sprites.readDataNumber(local_sprite, "count"))
    if (sprite_cursor.overlapsWith(local_sprite)) {
        local_sprite.setImage(sprites.readDataImage(local_sprite, "icon_hover"))
    } else {
        local_sprite.setImage(sprites.readDataImage(local_sprite, "icon"))
    }
}
function round_to (num: number, places: number) {
    return Math.round(num * 10 ** places) / 10 ** places
}
function load_game () {
    if (DEBUG) {
        return false
    }
    if (blockSettings.readBoolean("has_game_save")) {
        money = blockSettings.readNumber("money")
        upgrades = blockSettings.readStringArray("upgrades")
        upgrades_purchased = blockSettings.readStringArray("upgrades_purchased")
        for (let value of sprites_towers) {
            sprites.setDataNumber(value, "count", blockSettings.readNumber("count_" + sprites.readDataString(value, "internal_name")))
        }
        auto_save_enabled = blockSettings.readBoolean("auto_save")
        return true
    } else {
        return false
    }
}
function short_scale_name (num: number) {
    for (let index = 0; index <= short_scale_names.length; index++) {
        if (num < 10 ** ((index + 1) * 3) || index == short_scale_names.length - 1) {
            return short_scale_names[index]
        }
    }
    return 1
}
function recalculate_fossils_per_sec () {
    fossils_per_second = 0
    fossil_price = 1
    fossil_click_price_multiplier = 1
    for (let value of sprites_towers) {
        sprites.setDataNumber(value, "speed_multiplier", 1)
    }
    for (let value of upgrades_purchased) {
        local_upgrade = value.split(" | ")
        local_effect = local_upgrade[3]
        local_target = local_effect.split("*=")[0]
        local_effect_value = parseFloat(local_effect.split("*=")[1])
        if (local_target == "price") {
            fossil_price = fossil_price * local_effect_value
        } else if (local_target == "click") {
            fossil_click_price_multiplier = fossil_click_price_multiplier * local_effect_value
        } else {
            for (let value of sprites_towers) {
                if (local_target == sprites.readDataString(value, "internal_name")) {
                    sprites.setDataNumber(value, "speed_multiplier", sprites.readDataNumber(value, "speed_multiplier") * local_effect_value)
                    break;
                }
            }
        }
    }
    for (let value of sprites_towers) {
        fossils_per_second += sprites.readDataNumber(value, "count") * sprites.readDataNumber(value, "speed") * sprites.readDataNumber(value, "speed_multiplier")
    }
}
function primitive_tower_price (price: number, index: number) {
    return Math.round(price * 1.15 ** index)
}
function click_main_icon () {
    big_icon_until = game.runtime() + 100
    money += fossil_price * fossil_click_price_multiplier
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spriteutils.isDestroyed(menu_game)) {
        show_game_menu(true)
    } else {
        slide_out_menu(menu_game)
        enable_cursor(true)
    }
})
function slide_in_menu (menu: Sprite) {
    menu.left = 160
    menu.vx = -10000
    timer.background(function () {
        pauseUntil(() => menu.left <= 65)
        menu.left = 45
        menu.vx = 0
    })
}
function enable_cursor (en: boolean) {
    if (en) {
        controller.moveSprite(sprite_cursor)
    } else {
        controller.moveSprite(sprite_cursor, 0, 0)
    }
    sprite_cursor_image.setFlag(SpriteFlag.Invisible, !(en))
    cursor_enabled = en
}
function calculate_buy_price (tower_in_list: Sprite[], count: number) {
    local_sprite = tower_in_list[0]
    local_sum = 0
    for (let index = 0; index <= count - 1; index++) {
        local_sum += primitive_tower_price(sprites.readDataNumber(local_sprite, "price"), sprites.readDataNumber(local_sprite, "count") + index)
    }
    return local_sum
}
function create_tower (name: string, speed: number, top: number, left: number, icon: Image, icon_hover: Image, price: number, internal_name: string, description: string) {
    local_sprite = sprites.create(icon, SpriteKind.Tower)
    local_sprite.setFlag(SpriteFlag.Ghost, false)
    local_sprite.top = top
    local_sprite.left = left
    sprites.setDataString(local_sprite, "name", name)
    sprites.setDataString(local_sprite, "internal_name", internal_name)
    sprites.setDataString(local_sprite, "description", description)
    sprites.setDataNumber(local_sprite, "speed", speed)
    sprites.setDataNumber(local_sprite, "speed_multiplier", 1)
    sprites.setDataNumber(local_sprite, "count", 0)
    sprites.setDataNumber(local_sprite, "price", price)
    sprites.setDataImageValue(local_sprite, "icon", icon)
    sprites.setDataImageValue(local_sprite, "icon_hover", icon_hover)
    update_tower_button([local_sprite])
    sprites_towers.push(local_sprite)
}
function try_buy_tower (tower: Sprite, count: number, show_msgs: boolean) {
    local_price = calculate_buy_price([tower], count)
    if (money >= local_price) {
        money += local_price * -1
        sprites.changeDataNumberBy(tower, "count", count)
        return true
    } else {
        if (show_msgs) {
            game.showLongText("Not enough money! (Price of " + format_money(local_price) + ")", DialogLayout.Bottom)
        }
        return false
    }
}
function delete_game () {
    if (DEBUG) {
        return
    }
    blockSettings.writeBoolean("has_game_save", false)
}
function show_game_menu (transition: boolean) {
    for (let value of sprites.allOfKind(SpriteKind.MiniMenu)) {
        slide_out_menu(value)
    }
    enable_cursor(false)
    menu_items_game = [miniMenu.createMenuItem("Close"), miniMenu.createMenuItem("Save"), miniMenu.createMenuItem("Delete save")]
    if (auto_save_enabled) {
        menu_items_game.push(miniMenu.createMenuItem("Disable auto save"))
    } else {
        menu_items_game.push(miniMenu.createMenuItem("Enable auto save"))
    }
    menu_game = miniMenu.createMenuFromArray(menu_items_game)
    menu_game.setTitle("Game menu")
    menu_game.left = 45
    menu_game.top = 31
    menu_game.setDimensions(115, 89)
    menu_game.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 1)
    menu_game.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, images.colorBlock(15))
    menu_game.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, images.colorBlock(1))
    menu_game.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, images.colorBlock(15))
    menu_game.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, images.colorBlock(14))
    menu_game.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, images.colorBlock(1))
    menu_game.onButtonPressed(controller.A, function (selection, selectedIndex) {
        last_menu_index = selectedIndex
        if (selection.includes("Close")) {
            slide_out_menu(menu_game)
            timer.background(function () {
                pauseUntil(() => !(controller.A.isPressed()))
                enable_cursor(true)
            })
            return
        } else if (selection.includes("Save")) {
            save_game()
            game.showLongText("Saved game successfully!", DialogLayout.Bottom)
        } else if (selection.includes("Delete save")) {
            if (game.ask("Are you sure you want to", "delete your game save?")) {
                delete_game()
                game.showLongText("Deleted game save successfully!", DialogLayout.Bottom)
                game.reset()
            }
        } else if (selection.includes("auto save")) {
            auto_save_enabled = selection.includes("Enable")
            save_game()
        }
        slide_out_menu(menu_game)
        show_game_menu(false)
    })
    menu_game.onButtonPressed(controller.B, function (selection, selectedIndex) {
        last_menu_index = 0
        slide_out_menu(menu_game)
        timer.background(function () {
            pauseUntil(() => !(controller.B.isPressed()))
            enable_cursor(true)
        })
    })
    menu_game.setButtonEventsEnabled(false)
    for (let index = 0; index < Math.min(last_menu_index, menu_items_game.length - 1); index++) {
        menu_game.moveSelection(miniMenu.MoveDirection.Down)
    }
    timer.background(function () {
        pauseUntil(() => !(controller.A.isPressed()))
        menu_game.setButtonEventsEnabled(true)
    })
    if (transition) {
        slide_in_menu(menu_game)
    }
}
let last_money_update = 0
let menu_items_game: miniMenu.MenuItem[] = []
let menu_game: miniMenu.MenuSprite = null
let big_icon_until = 0
let local_effect_value = 0
let local_target = ""
let local_effect = ""
let local_sum = 0
let sprite_cursor_image: Sprite = null
let local_started = 0
let local_buy = 0
let local_quantity = 0
let menu_tower: miniMenu.MenuSprite = null
let menu_items_tower: miniMenu.MenuItem[] = []
let local_sprite: Sprite = null
let sprites_towers: Sprite[] = []
let sprite_main_icon: Sprite = null
let sprite_cursor: Sprite = null
let cursor_enabled = false
let local_text_sprite: TextSprite = null
let text_sprite_fossils_per_second: TextSprite = null
let text_sprite_fossil_price: TextSprite = null
let text_sprite_money: TextSprite = null
let last_menu_index = 0
let menu_upgrades: miniMenu.MenuSprite = null
let local_price = 0
let local_upgrade: string[] = []
let menu_items_upgrades: miniMenu.MenuItem[] = []
let sprite_upgrades_button: Sprite = null
let upgrades_purchased: string[] = []
let upgrades: string[] = []
let short_scale_names: string[] = []
let fossils_per_second = 0
let fossil_click_price_multiplier = 0
let fossil_price = 0
let auto_save_enabled = false
let money = 0
let DEBUG = false
DEBUG = false
stats.turnStats(true)
money = 0
if (DEBUG) {
    money = 1e+68
}
auto_save_enabled = true
fossil_price = 1
fossil_click_price_multiplier = 1
fossils_per_second = 0
// https://en.wikipedia.org/wiki/Long_and_short_scales
// https://en.wikipedia.org/wiki/Names_of_large_numbers
short_scale_names = [
"",
"k",
" million",
" billion",
" trillion",
" quadrillion",
" quintillion",
" sextillion",
" septillion",
" octillion",
" nonillion",
" decillion",
" undecillion",
" duodecillion",
" tredecillion",
" quattuordecillion",
" quindecillion",
" sexdecillion",
" septendecillion",
" octodecillion",
" novemdecillion",
" vigintillion"
]
scene.setBackgroundColor(14)
scene.setBackgroundImage(assets.image`background`)
if (DEBUG) {
    scene.setBackgroundColor(2)
    scene.backgroundImage().replace(1, 2)
}
create_cursor()
enable_cursor(true)
create_ui()
load_game()
game.onUpdate(function () {
    sprite_cursor_image.top = sprite_cursor.top
    sprite_cursor_image.left = sprite_cursor.left
    if (game.runtime() < big_icon_until) {
        sprite_main_icon.sx = 1.5
        sprite_main_icon.sy = 1.5
    } else if (sprite_main_icon.overlapsWith(sprite_cursor)) {
        sprite_main_icon.sx = 1.25
        sprite_main_icon.sy = 1.25
    } else {
        sprite_main_icon.sx = 1
        sprite_main_icon.sy = 1
    }
    recalculate_fossils_per_sec()
    money += fossils_per_second * ((game.runtime() - last_money_update) / 1000) * fossil_price
    last_money_update = game.runtime()
    update_top_bar_text()
    for (let value of sprites_towers) {
        update_tower_button([value])
    }
    if (sprite_cursor.overlapsWith(sprite_upgrades_button)) {
        sprite_upgrades_button.setImage(assets.image`upgrades_button_selected`)
    } else {
        sprite_upgrades_button.setImage(assets.image`upgrades_button`)
    }
})
forever(function () {
    pause(120000)
    if (auto_save_enabled) {
        save_game()
        Notification.waitForNotificationFinish()
        Notification.notify("Saved game successfully!", 1, assets.image`floppy_disk_icon`)
    }
})
