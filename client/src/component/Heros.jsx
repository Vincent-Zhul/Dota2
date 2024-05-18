import HeroCell from "./HeroCell";

const HeroList = (props) => {
    const strenghHeroList = [
        ['Alchemist', '炼金术师'],
        ['Axe', '斧王'],
        ['Bristleback', '钢背兽'],
        ['Centaur_Warrunner', '半人马战行者'],
        ['Chaos_Knight', '混沌骑士'],
        ['Dawnbreaker', '破晓晨星'],
        ['Doom', '末日使者'],
        ['Dragon_Knight', '龙骑士'],
        ['Earthshaker', '撼地者'],
        ['Earth_Spirit', '大地之灵'],
        ['Elder_Titan', '上古巨神'],
        ['Huskar', '哈斯卡'],
        ['Kunkka', '昆卡'],
        ['Legion_Commander', '军团指挥官'],
        ['Lifestealer', '噬魂鬼'],
        ['Mars', '马尔斯'],
        ['Night_Stalker', '暗夜魔王'],
        ['Ogre_Magi', '食人魔魔法师'],
        ['Omniknight', '全能骑士'],
        ['Primal_Beast', '兽'],
        ['Pudge', '帕吉'],
        ['Slardar', '斯拉达'],
        ['Spirit_Breaker', '裂魂人'],
        ['Sven', '斯温'],
        ['Tidehunter', '潮汐猎人'],
        ['Tiny', '小小'],
        ['Treant_Protector', '树精卫士'],
        ['Tusk', '巨牙海民'],
        ['Underlord', '孽主'],
        ['Undying', '不朽尸王'],
        ['Wraith_King', '冥魂大帝']
    ];

    const agilityHeroList = [
        ['Anti-Mage', '敌法师'],
        ['Arc_Warden', '天穹守望者'],
        ['Bloodseeker', '血魔'],
        ['Bounty_Hunter', '赏金猎人'],
        ['Clinkz', '克林克兹'],
        ['Drow_Ranger', '卓尔游侠'],
        ['Faceless_Void', '虚空假面'],
        ['Ember_Spirit', '灰烬之灵'],
        ['Gyrocopter', '矮人直升机'],
        ['Hoodwink', '森海飞霞'],
        ['Juggernaut', '主宰'],
        ['Lone_Druid', '德鲁伊'],
        ['Luna', '露娜'],
        ['Medusa', '美杜莎'],
        ['Meepo', '米波'],
        ['Monkey_King', '齐天大圣'],
        ['Morphling', '变体精灵'],
        ['Naga_Siren', '娜迦海妖'],
        ['Phantom_Assassin', '幻影刺客'],
        ['Phantom_Lancer', '幻影长矛手'],
        ['Razor', '雷泽'],
        ['Riki', '力丸'],
        ['Shadow_Fiend', '影魔'],
        ['Slark', '斯拉克'],
        ['Sniper', '矮人狙击手'],
        ['Spectre', '幽鬼'],
        ['Templar_Assassin', '圣堂刺客'],
        ['Terrorblade', '恐怖利刃'],
        ['Troll_Warlord', '巨魔战将'],
        ['Ursa', '熊战士'],
        ['Venomancer', '剧毒术士'],
        ['Viper', '冥界亚龙'],
        ['Weaver', '编织者'],
    ];

    const intelligenceHeroList = [
        ['Ancient_Apparition', '远古冰魂'],
        ['Crystal_Maiden', '水晶室女'],
        ['Death_Prophet', '死亡先知'],
        ['Disruptor', '干扰者'],
        ['Enchantress', '魅惑魔女'],
        ['Grimstroke', '天涯墨客'],
        ['Jakiro', '双头龙'],
        ['Keeper_of_the_Light', '光之守卫'],
        ['Leshrac', '拉席克'],
        ['Lich', '巫妖'],
        ['Lina', '丽娜'],
        ['Lion', '莱恩'],
        ['Muerta', '琼英碧灵'],
        ['Natures_Prophet', '先知'],
        ['Necrophos', '瘟疫法师'],
        ['Oracle', '神谕者'],
        ['Outworld_Destroyer', '殁境神蚀者'],
        ['Puck', '帕克'],
        ['Pugna', '帕格纳'],
        ['Queen_of_Pain', '痛苦女王'],
        ['Rubick', '拉比克'],
        ['Shadow_Demon', '暗影恶魔'],
        ['Shadow_Shaman', '暗影萨满'],
        ['Skywrath_Mage', '天怒法师'],
        ['Silencer', '沉默术士'],
        ['Storm_Spirit', '风暴之灵'],
        ['Tinker', '地精修补匠'],
        ['Warlock', '术士'],
        ['Witch_Doctor', '巫医'],
        ['Zeus', '宙斯']
    ];

    const universalHeroList = [
        ['Abaddon', '亚巴顿'],
        ['Bane', '祸乱之源'],
        ['Batrider', '蝙蝠骑士'],
        ['Beastmaster', '兽王'],
        ['Brewmaster', '酒仙'],
        ['Broodmother', '育母蜘蛛'],
        ['Chen', '陈'],
        ['Clockwerk', '发条技师'],
        ['Dark_Seer', '黑暗贤者'],
        ['Dark_Willow', '邪影芳灵'],
        ['Dazzle', '戴泽'],
        ['Enigma', '谜团'],
        ['Invoker', '祈求者'],
        ['Io', '艾欧'],
        ['Lycan', '狼人'],
        ['Magnus', '马格纳斯'],
        ['Marci', '玛西'],
        ['Nyx_Assassin', '司夜刺客'],
        ['Pangolier', '石鳞剑士'],
        ['Phoenix', '凤凰'],
        ['Sand_King', '沙王'],
        ['Snapfire', '电炎绝手'],
        ['Techies', '地精工程师'],
        ['Timbersaw', '伐木机'],
        ['Vengeful_Spirit', '复仇之魂'],
        ['Visage', '维萨吉'],
        ['Void_Spirit', '虚无之灵'],
        ['Windranger', '风行者'],
        ['Winter_Wyvern', '寒冬飞龙'],
    ];

    return(
        <div className="HeroList" 
            style={{
                display: 'grid',
                justifyContent: 'center',
                alignSelf: "flex-start",
                ...props.style
        }}>
            <div style={{
                height: '60px', 
                borderBottom: '10px solid #B9500B', 
                margin: '10px 0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img style={{flexShrink: 0}} src="http://localhost:3001/assets/commons/Strength_attribute_symbol.webp" alt="Strength Hero"/>力量英雄({strenghHeroList.length})
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px',
            }}>
                {strenghHeroList.map(([imageSrc, name2], index) => (
                    <HeroCell key={index} engName={imageSrc} cnName={name2}/>
                ))}
            </div>

            <div style={{
                height: '60px', 
                borderBottom: '10px solid #167C13', 
                margin: '10px 0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img style={{flexShrink: 0}} src="http://localhost:3001/assets/commons/Agility_attribute_symbol.webp" alt="Strength Hero"/>敏捷英雄({agilityHeroList.length})
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px',
            }}>
                {agilityHeroList.map(([imageSrc, name2], index) => (
                    <HeroCell key={index} engName={imageSrc} cnName={name2}/>
                ))}
            </div>

            <div style={{
                height: '60px', 
                borderBottom: '10px solid #257DAE', 
                margin: '10px 0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img style={{flexShrink: 0}} src="http://localhost:3001/assets/commons/Intelligence_attribute_symbol.webp" alt="Strength Hero"/>智力英雄({intelligenceHeroList.length})
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px',
            }}>
                {intelligenceHeroList.map(([imageSrc, name2], index) => (
                    <HeroCell key={index} engName={imageSrc} cnName={name2}/>
                ))}
            </div>

            <div style={{
                height: '60px', 
                borderBottom: '10px solid #5D3FD3', 
                margin: '10px 0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img style={{flexShrink: 0}} src="http://localhost:3001/assets/commons/Intelligence_attribute_symbol.webp" alt="Strength Hero"/>全才英雄({universalHeroList.length})
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px',
            }}>
                {universalHeroList.map(([imageSrc, name2], index) => (
                    <HeroCell key={index} engName={imageSrc} cnName={name2}/>
                ))}
            </div>
        </div>
    )
}

export default HeroList;