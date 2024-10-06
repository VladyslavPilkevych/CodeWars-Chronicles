{-# LANGUAGE RankNTypes #-}
module Derivative where

data F a = F (a, a)

instance (Num a) => Num (F a) where
  (*) (F (x, x')) (F (y, y')) = F (x * y, y * x' + x * y')
  (+) (F (x, x')) (F (y, y')) = F (x + y, x' + y')
  (-) (F (x, x')) (F (y, y')) = F (x - y, x' - y')
  abs  (F (x, x')) = undefined
  signum  (F (x, x')) = undefined
  fromInteger n = F (fromInteger n, 0)
  
diff :: (Show b, Num b) => (forall a. Num a => a -> a) -> b -> b
diff f x | (F (_, w)) <- f (F (x, 1)) = w
