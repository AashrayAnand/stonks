# Stonks

## Objective

Provide simple and intuitive portfolio management + stock watching

## End-user experience

Users should be able to easily create named **indexes** of stock tickers. These indexes are simply meant for the user to be able to visually track a group of stokcs that in their eyes are **similar**, ors worth grouping together (e.g. their holdings in one of their particular portfolios). What should make this application stand out is:

- aesthetically pleasing interface with essential stats and visualizations per user choice
- real-time data-driven interface
- long term: simple exporting of user's stock portfolio from brokerage service applications (e.g. fidelity, ETRADE etc.)
- long term: machine learning for providing user insight regarding stock groups (e.g. buy/sell meter, best option strike price etc.)

## Application Components

App is broken down into concrete services for each core functionality:

1. **Authentication Service:** responsible for creating new users, and authenticating new users, adding new user data to User DB, and handling session token generation + session store management for authenticated users, **version 1.1**
2. **CRUD Service:** responsible for CRUD operations e.g. creating/modifying/deleting new stock groups, fetching data for groups, caching group data for improved lookup **version 1.0**
3. **Export Service:** Responsible for exporting data from brokerage service applications, **slated for version 2.0**
4. **Data Service:** Responsible for fetching stock ticker data from external API, serving data to CRUD service, and caching group data asynchronously, to optimize CRUD service performance, **version 1.0**

## Interface

1. **Authentication Service**
   1. **Register**
      - behavior: validate input in front end form, attempt to add user to User DB
      - success: return success code
        - note: user must verify email to make requests to CRUD service
      - failure: return error code
   2. **Login**
      - behavior: validate user, generate session token and add token-UserId key-value pair to session store
      - success: return session token + success code
        - note: session token should last 15 minutes of inactivity
      - failure: return error code
2. **CRUD Service**
   1. **Create group**
      - input: group name + [group symbols] 
      - behavior: validate input (new group name and valid stock ticker symbols) and add group to Group DB
      - success: return success code
      - failure: return error code, describing error e.g. group exists, timeout etc.
   2. **Delete group**
      - input: group name
      - behavior: validate group name, delete group
      - success: return success code
      - failure: return error code, describing error e.g. group doesn't exist, timeout etc.
   3. **Modify group**
      - input: group name + [new symbols] + [existing symbols]
      - behavior: validate input (group exists and valid stock ticker symbols) and add new symbols to group, and delete old symbols from group
      - success: return success code
        - note: request should return success code, even if symbols included in existing symbols were not in group, should notify user of symbols not in group
      - failure: return error code, describing error e.g. group doesn't exist, timeout etc.
   4. **Get Group**
      1. input: UserID + [group names]
      2. behavior: check group cache for specified UserId/group, if not present, check stock ticker cache for symbols in group, query Stock DB for these symbols, cache group data in group cache
      3. success: return success code + [group data]
         1. note: request should not fail if fails to cache group data, but should log this
      4. failure: return error code, describing error e.g. failed to query Group DB, failed to query Stock DB
3. **Export Service**
   1. TODO
4. **Data Service**
   1. **Refresh tickers**
      1. behavior: execute REST call to stock ticker API, update Stock DB with resulting figures, flush group cache
         1. note: this should occur on timed intervals, based on max API calls that can be made
      2. success: do nothing
      3. failure: retry until stopping condition

## Application Architecture

## Database Architecture

1. User DB: Relational DB for storing active users, should include:
   1. UserId (auto-generated primary key)
   2. name
   3. email
   4. encrypted password
2. Stock DB: Cached data service which stores stock ticker data
   1. stock ticker symbol (key)
   2. timestamp
   3. current price
   4. $ change
   5. % change
3. Group DB: NoSQL DB for storing group data, should include:
   1. UserId
   2. group name
   3. stock tickers


