import mysql from "mysql2";
import Skill from "./models/skill.js";
import Hero from "./models/hero.js";

const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: 'admin123', 
    database: 'dota' ,
    waitForConnections: true,
});

export async function GetHeroByName(heroName){
    const sql = `select * from heros where HeroName = ?`;

    try{
        const [results, ] = await pool.promise().query(sql, [heroName])
        if(results.length){
            return {code: 200, data: new Hero(results[0])}
        }
        else{
            return {code: 404, message: `未能取得${heroName}的数据！`}
        }
    }
    catch(error){
        return {code: 500, message: `获取${heroName}数据失败，错误信息：${error.message}`};
    }
}

export async function InsertHero(hero){
    const sql = `insert into heros (
        HeroName,
        HeroCNName,
        HeroType,
        Image1,
        Image2,

        Image3,
        InitStrength,
        StrengthGrowth,
        InitAgility,
        AgilityGrowth,

        InitIntelligence,
        IntelligenceGrowth,
        InitHealth,
        InitHealthRecover,
        InitMana,

        InitManaRecover,
        InitArmor,
        InitMagicResist,
        DamageMin,
        DamageMax,

        AttackType,
        AttackRange,
        InitAttackSpeed,
        AttackRate,
        AttackAnimation1,

        AttackAnimation2,
        ProjectileSpeed,
        MoveSpeed,
        TurnRate,
        DayVision,

        NightVision) values (?,?,?,?,?,
            ?,?,?,?,?,
            ?,?,?,?,?,
            ?,?,?,?,?,
            ?,?,?,?,?,
            ?,?,?,?,?,?)`;

    try {
        const [results] = await pool.promise().query(sql, [
            hero.HeroName,
            hero.HeroCNName,
            hero.HeroType,
            hero.Image1,
            hero.Image2,
            hero.Image3,
            hero.InitStrength,
            hero.StrengthGrowth,
            hero.InitAgility,
            hero.AgilityGrowth,
            hero.InitIntelligence,
            hero.IntelligenceGrowth,
            hero.InitHealth,
            hero.InitHealthRecover,
            hero.InitMana,
            hero.InitManaRecover,
            hero.InitArmor,
            hero.InitMagicResist,
            hero.DamageMin,
            hero.DamageMax,
            hero.AttackType,
            hero.AttackRange,
            hero.InitAttackSpeed,
            hero.AttackRate,
            hero.AttackAnimation1,
            hero.AttackAnimation2,
            hero.ProjectileSpeed,
            hero.MoveSpeed,
            hero.TurnRate,
            hero.DayVision,
            hero.NightVision]);

        if(results.affectedRows) {
            return {code: 200, message:`英雄${hero.HeroName}已成功添加至数据库中！`};
        }
        else{
            return {code: 404, message:`英雄${hero.HeroName}未能添加至数据库中！`};
        }
    } 
    catch (error) {
        return {code: 500, message:`英雄${hero.HeroName}信息插入失败，错误信息：${error.message}`};
    }
}

export async function UpdateHero(hero){
    const sql = `
        update heros 
        set
            HeroName = ?,
            HeroCNName = ?,
            HeroType = ?,
            Image1 = ?,
            Image2 = ?,
            Image3 = ?,
            InitStrength = ?,
            StrengthGrowth = ?,
            InitAgility = ?,
            AgilityGrowth = ?,
            InitIntelligence = ?,
            IntelligenceGrowth = ?,
            InitHealth = ?,
            InitHealthRecover = ?,
            InitMana = ?,
            InitManaRecover = ?,
            InitArmor = ?,
            InitMagicResist = ?,
            DamageMin = ?,
            DamageMax = ?,
            AttackType = ?,
            AttackRange = ?,
            InitAttackSpeed = ?,
            AttackRate = ?,
            AttackAnimation1 = ?,
            AttackAnimation2 = ?,
            ProjectileSpeed = ?,
            MoveSpeed = ?,
            TurnRate = ?,
            DayVision = ?,
            NightVision = ?
        where HeroName = ? `;

        try {
            const [results] = await pool.promise().query(sql, [
                hero.HeroName,
                hero.HeroCNName,
                hero.HeroType,
                hero.Image1,
                hero.Image2,
                hero.Image3,
                hero.InitStrength,
                hero.StrengthGrowth,
                hero.InitAgility,
                hero.AgilityGrowth,
                hero.InitIntelligence,
                hero.IntelligenceGrowth,
                hero.InitHealth,
                hero.InitHealthRecover,
                hero.InitMana,
                hero.InitManaRecover,
                hero.InitArmor,
                hero.InitMagicResist,
                hero.DamageMin,
                hero.DamageMax,
                hero.AttackType,
                hero.AttackRange,
                hero.InitAttackSpeed,
                hero.AttackRate,
                hero.AttackAnimation1,
                hero.AttackAnimation2,
                hero.ProjectileSpeed,
                hero.MoveSpeed,
                hero.TurnRate,
                hero.DayVision,
                hero.NightVision,
                hero.HeroName
            ]);

            if(results.affectedRows) {
                console.log('correct!')
                return {code: 200, message:`已成功更新英雄${hero.HeroName}的数据！`};
            }
            else{
                return {code: 404, message:`未能更新英雄${hero.HeroName}的数据！`};
            }
        } catch (error) {
            return {code: 500, message:`更新英雄${hero.HeroName}的数据失败，错误信息：${error.message}`};
        }
}

export async function GetSkillByName(skillName){
    const sql = `select * from skills where SkillName = ?`;

    try{
        const [results, ] = await pool.promise().query(sql, [skillName])
        if(results.length){
            return {code: 200, data: new Skill(results[0])}
        }
        else{
            return {code: 404, message: `未能取得${skillName}的数据！`}
        }
    }
    catch(error){
        return {code: 500, message: `获取${skillName}数据失败，错误信息：${error.message}`};
    }
}

export async function InsertSkill(skill){
    const sql = `insert into skills (
        SkillName,
        SkillCNName,
        SkillDescription,
        SkillImage1,
        SkillImage2,

        SkillImage3,
        SkillType,
        Cost,
        SkillCD,
        Sequence,

        ExtraInfo1,
        ExtraInfo2,
        ExtraInfo3,
        Owner) values (?,?,?,?,?,
            ?,?,?,?,?,
            ?,?,?,?)`;

    try {
        const [results] = await pool.promise().query(sql, [
        skill.SkillName,
        skill.SkillCNName,
        skill.SkillDescription,
        skill.SkillImage1,
        skill.SkillImage2,

        skill.SkillImage3,
        skill.SkillType,
        skill.Cost,
        skill.SkillCD,
        skill.Sequence,

        skill.ExtraInfo1,
        skill.ExtraInfo2,
        skill.ExtraInfo3,
        skill.Owner]);

        if(results.affectedRows) {
            return {code: 200, message:`技能${skill.skillName}已成功添加至数据库中！`};
        }
        else{
            return {code: 404, message:`技能${skill.skillName}未能添加至数据库中！`};
        }
    } 
    catch (error) {
        return {code: 500, message:`技能${skill.skillName}信息插入失败，错误信息：${error.message}`};
    }
}

export async function UpdateSkill(skill){
    const sql = `
        update skills 
        set
            SkillName = ?,
            SkillCNName = ?,
            SkillDescription = ?,
            SkillImage1 = ?,
            SkillImage2 = ?,

            SkillImage3 = ?,
            SkillType = ?,
            Cost = ?,
            SkillCD = ?,
            Sequence = ?,

            ExtraInfo1 = ?,
            ExtraInfo2 = ?,
            ExtraInfo3 = ?,
            Owner = ?
        where SkillName = ? `;

        try {
            const [results] = await pool.promise().query(sql, [
                skill.SkillName,
                skill.SkillCNName,
                skill.SkillDescription,
                skill.SkillImage1,
                skill.SkillImage2,
                skill.SkillImage3,
                skill.SkillType,
                skill.Cost,
                skill.SkillCD,
                skill.Sequence,
                skill.ExtraInfo1,
                skill.ExtraInfo2,
                skill.ExtraInfo3,
                skill.Owner,
                skill.SkillName
            ]);

            if(results.affectedRows) {
                return {code: 200, message:`已成功更新技能${skill.SkillName}的数据！`};
            }
            else{
                return {code: 404, message:`未能更新技能${skill.SkillName}的数据！`};
            }
        } catch (error) {
            return {code: 500, message:`更新技能${skill.SkillName}的数据失败，错误信息：${error.message}`};
        }
}