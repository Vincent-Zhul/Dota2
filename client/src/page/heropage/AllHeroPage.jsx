import { useState, useEffect } from 'react';
import './AllHeroPage.css';
import HeroList from "./Heros";
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changePage } from '../../state/state';

const AllHeroPage = () => {
    const [heroPageType, setHeroPageType] = useState('英雄');
    const [classification, setClassification] = useState('属性');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changePage({newPage: '英雄'}));
    },[]);

    return(
        <div className='AllHeroPageContent'>
            <div className='HeroPageNavbar'>
                <Box 
                    onClick={() => setHeroPageType('英雄')} 
                    sx={{
                        position: 'absolute',
                        left: '21.5%',
                        width: "5%",
                        height: '100%',
                        color: (heroPageType === '英雄' ? 'rgb(255, 255, 255)' : 'rgb(161, 161, 161)'),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover':{
                            color:'rgb(255, 255, 255)',
                            cursor:'pointer'
                        }
                }}>
                    英雄
                </Box>

                <Box style={{
                    position: 'absolute',
                    height: '100%',
                    left: '26.5%',
                    color: 'rgb(161, 161, 161)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700
                }}>
                    /
                </Box>

                <Box 
                    onClick={() => setHeroPageType('攻略')} 
                    sx={{
                        position: 'absolute',
                        left: '26.5%',
                        width: "5%",
                        height: '100%',
                        color: (heroPageType === '攻略' ? 'rgb(255, 255, 255)' : 'rgb(161, 161, 161)'),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover':{
                            color:'rgb(255, 255, 255)',
                            cursor:'pointer'
                        }
                }}>
                    攻略
                </Box>

                <Box style={{
                    position: 'absolute',
                    height: '100%',
                    left: '31.5%',
                    color: 'rgb(161, 161, 161)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700
                }}>
                    /
                </Box>

                <Box 
                    onClick={() => setHeroPageType('走势')} 
                    sx={{
                        position: 'absolute',
                        left: '31.5%',
                        width: "5%",
                        height: '100%',
                        color: (heroPageType === '走势' ? 'rgb(255, 255, 255)' : 'rgb(161, 161, 161)'),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover':{
                            color:'rgb(255, 255, 255)',
                            cursor:'pointer'
                        }
                }}>
                    走势
                </Box>

                <Box style={{
                    position: 'absolute',
                    height: '100%',
                    left: '36.5%',
                    color: 'rgb(161, 161, 161)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700
                }}>
                    /
                </Box>

                <Box 
                    onClick={() => navigate('/importcenter')} 
                    sx={{
                        position: 'absolute',
                        left: '36.5%',
                        width: "5%",
                        height: '100%',
                        color: 'rgb(161, 161, 161)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover':{
                            color:'rgb(255, 255, 255)',
                            cursor:'pointer'
                        }
                }}>
                    导入
                </Box>
            </div>

            { heroPageType === '英雄' && <div className='AllHeroPageAllHeros'>
                <div className='HeroListContainer'>
                    <HeroList/>
                </div>

                <div className='HeroClassification'>
                    <div className='HCPanel'>
                        <div 
                            style={{
                                width: '48%',
                                color: 'white', 
                                height: '100%',
                        }}>
                            <div style={{
                                display: 'flex',
                                fontSize: '12px',
                                color: 'rgb(161, 161, 161)',
                                height: '100%',
                                alignItems: 'center'
                            }}>
                                分类: 
                                <select
                                    className='HCSelect'
                                    onChange={(e) => setClassification(e.target.value)}
                                    style={{
                                        width: '48%',
                                        height: '140%',
                                        backgroundColor: 'rgb(100, 100, 100)',
                                        marginLeft: '2%'
                                }}>  
                                    <option value="属性">属性</option> 
                                </select>  
                            </div>
                        </div>
                            
                        <div className='HCRightPart'
                            style={{
                                height: '100%',
                                width: '48%',
                                color: 'white', 
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                        }}>
                            <div style={{
                                fontSize: '12px',
                                color: 'rgb(161, 161, 161)',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                                类型
                                <div style={{
                                    display: 'flex',
                                    height: '100%',
                                }}>
                                    <img src='https://dota2server.vercel.app/assets/commons/Filter_carry_icon.webp' style={{filter: 'invert(70%)'}}/>
                                    <img src='https://dota2server.vercel.app/assets/commons/Filter_support_icon.webp' style={{filter: 'invert(70%)'}}/>
                                </div>
                            </div>

                            <div style={{
                                fontSize: '12px',
                                color: 'rgb(161, 161, 161)',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                                复杂程度
                                <div style={{
                                    display: 'flex',
                                    height: '100%',
                                }}>
                                    <img src='https://dota2server.vercel.app/assets/commons/Filter_complexity_icon.webp' style={{filter: 'invert(70%)'}}/>
                                    <img src='https://dota2server.vercel.app/assets/commons/Filter_complexity_icon.webp' style={{filter: 'invert(70%)'}}/>
                                    <img src='https://dota2server.vercel.app/assets/commons/Filter_complexity_icon.webp' style={{filter: 'invert(70%)'}}/>
                                </div>
                            </div>

                            <div style={{
                                fontSize: '12px',
                                color: 'rgb(161, 161, 161)',
                                height:'100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                                标签
                                <div style={{
                                    display: 'flex',
                                    height: '100%'
                                }}>
                                    <img src='https://dota2server.vercel.app/assets/commons/Filter_disabler_icon.webp' style={{filter: 'invert(70%)'}}/>
                                    <img src='https://dota2server.vercel.app/assets/commons/Filter_durable_icon.webp' style={{filter: 'invert(70%)'}}/>
                                    <img src='https://dota2server.vercel.app/assets/commons/Filter_escape_icon.webp' style={{filter: 'invert(70%)'}}/>
                                    <img src='https://dota2server.vercel.app/assets/commons/Filter_initiator_icon.webp' style={{filter: 'invert(70%)'}}/>
                                    <img src='https://dota2server.vercel.app/assets/commons/Filter_nuker_icon.webp' style={{filter: 'invert(70%)'}}/>
                                    <img src='https://dota2server.vercel.app/assets/commons/Filter_pusher_icon.webp' style={{filter: 'invert(70%)'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='HCBackground'></div>
                </div>
            </div>}
        </div>
    )
}

export default AllHeroPage;