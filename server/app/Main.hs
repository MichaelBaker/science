{-# LANGUAGE OverloadedStrings, QuasiQuotes #-}

module Main where

import Data.Aeson                        (Value(..), object, (.=))
import Data.Aeson.Encode                 (encodeToBuilder)
import Network.Wai                       (Application)
import Web.Scotty                        (ScottyM, get, scottyApp, scotty, json, text)
import Network.Wai.Handler.Warp          (run)
import Control.Concurrent                (forkIO, threadDelay)
import Control.Concurrent.Chan           (Chan, newChan, writeChan)
import Network.Wai.EventSource           (ServerEvent (ServerEvent), eventSourceAppChan)
import Control.Monad.Trans               (liftIO)
import Network.Wai.Middleware.AddHeaders (addHeaders)

app :: Chan ServerEvent -> ScottyM ()
app channel = do
  get "/" $ do
    liftIO $ writeChan channel $ ServerEvent Nothing Nothing []
    text "hello"

main :: IO ()
main = do
  eventChan       <- newChan
  thread <- forkIO $ loop eventChan
  -- webServerThread <- forkIO $ scotty 9000 (app eventChan)
  run 9001 $ addHeaders [("Access-Control-Allow-Origin", "*")] $ eventSourceAppChan eventChan
  return ()

loop channel = do
  writeChan channel $ ServerEvent Nothing Nothing [encodeToBuilder $ object ["foo" .= String "Hello", "bar" .= Number 42]]
  threadDelay 1000000
  loop channel
