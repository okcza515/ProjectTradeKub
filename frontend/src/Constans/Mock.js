export const mockSeachResult = {
  count: 4,
  result: [
    {
      description: "APPLE INC",
      displaySymbol: "AAPL",
      symbol: "AAPL",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "AAPL.SW",
      symbol: "AAPL.SW",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.BE",
      symbol: "APC.BE",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.DE",
      symbol: "APC.DE",
      type: "Common Stock",
    },
  ],
};

export const mockCompanyDetails = {
  country: "US",
  currency: "USD",
  exchange: "NASDAQ/NMS (GLOBAL MARKET)",
  ipo: "1980-12-12",
  marketCapitalization: 1415993,
  name: "Apple Inc",
  phone: "14089961010",
  shareOutstanding: 4375.47998046875,
  ticker: "AAPL",
  weburl: "https://www.apple.com/",
  logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
  finnhubIndustry: "Technology",
};

export const mockStockQuote2 = {
  instrumentType: "STOCK",
  symbol: "AOT",
  high: 72.25,
  low: 70.0,
  last: 70.0,
  average: 71.986,
  change: -2.0,
  percentChange: -2.78,
  totalVolume: 1044400,
  marketStatus: "Intermission1",
  securityType: "CS",
  eps: 0.02,
  pe: 0.0,
  pbv: 9.94,
  percentYield: 0.0,
  maturityDate: null,
  exercisePrice: null,
  underlying: null,
  underlyingPrice: null,
  intrinsicValue: null,
  theoretical: null,
  moneyness: null,
  lastTradingDate: null,
  toLastTrade: null,
  exerciseRatio: null,
  impliedVolatility: null,
  exchange: null,
  aumSize: null,
  inav: null,
};

export const mockStockCandle2 = {
  lastSequence: 290554,
  time: [1677603600, 1680282000, 1682874000],
  open: [73.0, 71.25, 73.25],
  high: [73.5, 73.5, 74.25],
  low: [66.0, 71.0, 70.0],
  close: [71.0, 73.25, 70.0],
  volume: [508545271, 269678171, 196668787],
  value: [35627688590.11, 19512507933.78, 14383472409.92],
};

export const mockStockDetails = {
  symbol: "CPALL",
  company_name: "บริษัท ซีพี ออลล์ จำกัด (มหาชน)",
  stock_industry: "พาณิชย์",
  market_value: 581655812283,
  volume: 8983101348,
  address:
    "เลขที่ 313 อาคารซีพี ทาวเวอร์ ชั้น 24 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500",
  telephone: "0-2071-9000",
  website: "http://www.cpall.co.th",
  registered_capital: 8986296048,
  established_date: "1988-01-01T00:00:00",
  market_entry_date: "2003-10-02T00:00:00",
  ipo_price: 42.0,
  free_float: 96417,
  major_shareholders: 12894,
};
