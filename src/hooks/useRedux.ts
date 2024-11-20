import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';

export const useRedux = () => {
  const dispatch = useDispatch<AppDispatch>();
  const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector;

  return { dispatch, useSelectorTyped };
};
