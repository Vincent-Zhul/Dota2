import io from 'socket.io-client';

export function SocketInitialize (connection){
    console.log('初始化socket');
    connection = io('https://dota2server.vercel.app');
    connection.on('connection', () => {
        console.log('连接成功');
    });

    connection.emit('user:login', { UserName: '测试用户'});
}