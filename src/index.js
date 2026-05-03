import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import http from 'http';
import { Server } from 'socket.io';
import connect from './config/connectDB';
import authRoutes from './routes/auth';
import patientRoutes from './routes/patient';
import employeeRoutes from './routes/employee';
import doctorRoutes from './routes/doctor';
import categoryRoutes from './routes/category';
import serviceRoutes from './routes/service';
import sessionRoutes from './routes/session';
import scheduleRoutes from './routes/schedule';
import appointmentRoutes from './routes/appointment';
import billRoutes from './routes/bill';
import reportRoutes from './routes/report';
import chatRoutes from './routes/chat.route';
import rateLimit from 'express-rate-limit';
require('dotenv').config();

const app = express();

// app.use(
// 	cors({
// 		origin: [process.env.REACT_ADMIN_URL, process.env.REACT_CLIENT_URL],
// 		credentials: true,
// 	}),
// );
app.use(
	cors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		allowedHeaders: ['Content-Type', 'Authorization', 'token'],
		credentials: true,
	}),
);
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const chatLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 phút
    max: 10,             // tối đa 15 request/IP/phút
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        errCode: 429,
        reply: 'Bạn đang nhắn tin quá nhanh. Vui lòng chờ 1 phút rồi thử lại, hoặc gọi (028) 1234 5678 để được hỗ trợ.',
        action: null,
    },
});

//ROUTES
app.get('/', (req, res) => res.send('Backend Toothhive'));
app.use('/api/auth', authRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/session', sessionRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/bill', billRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/chat', chatLimiter, chatRoutes);

connect();

const port = process.env.PORT || 8080;

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: '*',
		credentials: true,
	},
});

app.set('socketio', io); //để file nào cũng có thể dùng được

io.on('connection', (socket) => {
	console.log(`user connected: ${socket.id}`);

	socket.on('disconnect', () => {
		console.log(`user disconnected: ${socket.id}`);
	});
});

server.listen(port, () => {
	console.log(`Backend Toothhive is running at port ${port}`);
});
