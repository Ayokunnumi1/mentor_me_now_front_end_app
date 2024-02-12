import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mentorsListReducer from './slices/mentors/mentorsListSlice';
import mentorDetailsReducer from './slices/mentors/mentorDetailsSlice';
import authReducer from './slices/auth/authSlice';
import addMentorReducer from './slices/mentors/addMentorSlice';
import createReservationReducer from './slices/reservations/createReservationSlice';
import reservationsListReducer from './slices/reservations/reservationsListSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  mentorsList: mentorsListReducer,
  mentorDetails: mentorDetailsReducer,
  auth: authReducer,
  addMentor: addMentorReducer,
  createReservation: createReservationReducer,
  reservationsList: reservationsListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
