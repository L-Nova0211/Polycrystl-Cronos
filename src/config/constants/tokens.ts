const tokens = {
  matic: {
    symbol: 'matic',
    address: {
      137: '0x0000000000000000000000000000000000001010',
      338: '',
    },
    projectLink: 'https://polygon.technology',
  },
  crystl: {
    symbol: 'CRYSTL',
    address: {
      137: '0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64',
      338: '',
      25: '0xCbDE0E17d14F49e10a10302a32d17AE88a7Ecb8B',
    },
    decimals: 18,
    projectLink: 'https://crystl.finance/',
  },
  wmatic: {
    symbol: 'WMATIC',
    address: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      338: '',
      25: '0xad79AC3c5a5c15C6B9194F5568e451b3fc3C2B40',
    },
    decimals: 18,
    projectLink: 'https://polygon.technology',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      338: '',
      25: '0x66e428c3f67a68878562e79A0234c1F83c208770',
    },
    decimals: 6,
    projectLink: 'https://tether.to',
  },
  banana: {
    symbol: 'BANANA',
    address: {
      137: '0x5d47baba0d66083c52009271faf3f50dcc01023c',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://apeswap.finance/',
  },
  eth: {
    symbol: 'ETH',
    address: {
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      338: '',
      25: '0xe44Fd7fCb2b1581822D0c862B68222998a0c299a',
    },
    decimals: 18,
    projectLink: 'https://www.ethereum.org/',
  },
  link: {
    symbol: 'LINK',
    address: {
      137: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://chain.link/',
  },
  aave: {
    symbol: 'AAVE',
    address: {
      137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://aave.com/',
  },
  crv: {
    symbol: 'CRV',
    address: {
      137: '0x172370d5cd63279efa6d502dab29171933a610af',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://curve.fi',
  },
  polydoge: {
    symbol: 'POLYDOGE',
    address: {
      137: '0x8a953cfe442c5e8855cc6c61b1293fa648bae472',
      338: '',
      25: '0x9b8077C6590b560f1A9D60512648277D29b35A3B',
    },
    decimals: 18,
    projectLink: 'https://www.polydoge.com',
  },
  jdi: {
    symbol: 'JDI',
    address: {
      137: '0x340fe1d898eccaad394e2ba0fc1f93d27c7b717a',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://jdiyield.com/',
  },
  usdc: {
    symbol: 'USDC',
    address: {
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      338: '',
      25: '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
    },
    decimals: 6,
    projectLink: 'https://www.centre.io/usdc',
  },
  dai: {
    symbol: 'DAI',
    address: {
      137: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      338: '',
      25: '0xF2001B145b43032AAF5Ee2884e456CCd805F677D',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  btc: {
    symbol: 'wBTC',
    address: {
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      338: '',
      25: '0x062E66477Faf219F25D27dCED647BF57C3107d52',
    },
    decimals: 8,
    projectLink: 'https://wbtc.network/',
  },
  fish: {
    symbol: 'FISH',
    address: {
      137: '0x3a3df212b7aa91aa0402b9035b098891d276572b',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://polycat.finance/',
  },
  snx: {
    symbol: 'SNX',
    address: {
      137: '0x50b728d8d964fd00c2d0aad81718b71311fef68a',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://www.synthetix.io/',
  },
  omen: {
    symbol: 'OMEN',
    address: {
      137: '0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://augury.finance/',
  },
  tako: {
    symbol: 'TAKO',
    address: {
      137: '0x6d2a71f4edf10ab1e821b9b373363e1e24e5df6b',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://takodefi.com/',
  },
  tape: {
    symbol: 'TAPE',
    address: {
      137: '0xf98f70c265093a3b3adbef84ddc29eace900685b',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://www.apetools.co',
  },
  honor: {
    symbol: 'HONOR',
    address: {
      137: '0xb82a20b4522680951f11c94c54b8800c1c237693',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://www.farmhero.io/',
  },
  pspace: {
    symbol: 'pSPACE',
    address: {
      137: '0xD016cAAe879c42cB0D74BB1A265021bf980A7E96',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://polygon.aperocket.finance',
  },
  roll: {
    symbol: 'ROLL',
    address: {
      137: '0xc68e83a305b0fad69e264a1769a0a070f190d2d6',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://polyroll.org',
  },
  bscgirl: {
    symbol: 'BSCGIRL',
    address: {
      137: '0x4e9a46ea6a22f3894abee2302ad42fd3b69e21e2',
      338: '',
    },
    decimals: 8,
    projectLink: 'https://bscgirl.site/',
  },
  yeld: {
    symbol: 'YELD',
    address: {
      137: '0xd0f3121a190d85de0ab6131f2bcecdbfcfb38891',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://polyyeld.finance/',
  },
  bnb: {
    symbol: 'BNB',
    address: {
      137: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
      338: '',
      25: '0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
    },
    decimals: 18,
    projectLink: 'https://binance.com/',
  },
  bpul: {
    symbol: 'BPUL',
    address: {
      137: '0x68f044B59D96ec856aC72C29Df997348c8C1fFf3',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://www.polypulsar.farm/',
  },
  cosmic: {
    symbol: 'COSMIC',
    address: {
      137: '0xa5eb60ca85898f8b26e18ff7c7e43623ccba772c',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://cosmicswap.finance/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      137: '0x87ff96aba480f1813af5c780387d8de7cf7d8261',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://binance.com/',
  },
  mana: {
    symbol: 'MANA',
    address: {
      137: '0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://decentraland.org/',
  },
  spade: {
    symbol: 'SPADE',
    address: {
      137: '0xf5ea626334037a2cf0155d49ea6462fddc6eff19',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://polygonfarm.finance/',
  },
  neptune: {
    symbol: 'NEPTUNE',
    address: {
      137: '0x4527d831cefc76d0e5f8699f8ff4494611a6bf31',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://neptune.astrofarms.finance',
  },
  piratep: {
    symbol: 'PIRATEP',
    address: {
      137: '0x3750144AcD56CC1d3e8dAFD8a187Ad10d174d462',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://treasurekey.bet',
  },
  sol: {
    symbol: 'SOL',
    address: {
      137: '0x7dff46370e9ea5f0bad3c4e29711ad50062ea7a4',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://solana.com',
  },
  teabag: {
    symbol: 'TEABAG',
    address: {
      137: '0xFA8F10950EAF53449c77E47A0c68C1996CC28Eb1',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://www.teabagsdefi.com/',
  },
  pwings: {
    symbol: 'PWINGS',
    address: {
      137: '0x845e76a8691423fbc4ecb8dd77556cb61c09ee25',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://polygon.jetswap.finance/',
  },
  xdo: {
    symbol: 'XDO',
    address: {
      137: '0x3dc7b06dd0b1f08ef9acbbd2564f8605b4868eea',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://xdollar.fi/',
  },
  xusd: {
    symbol: 'xUSD',
    address: {
      137: '0x3a3e7650f8b9f667da98f236010fbf44ee4b2975',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://xdollar.fi/',
  },
  pear: {
    symbol: 'PEAR',
    address: {
      137: '0xc8bcb58caEf1bE972C0B638B1dD8B0748Fdc8A44',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://pearzap.com/',
  },
  goon: {
    symbol: 'GOON',
    address: {
      137: '0x50D74B93b2D970A2d727A43F490742051d93401B',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://polygoon.finance/',
  },
  phx: {
    symbol: 'PHX',
    address: {
      137: '0x9c6bfedc14b5c23e3900889436edca7805170f01',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://www.phx.finance/',
  },
  ham: {
    symbol: 'HAM',
    address: {
      137: '0xec2c9383926361d17bb8a45ad97e1648e9dd6641',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://hamdefi.com/',
  },
  hair: {
    symbol: 'HAIR',
    address: {
      137: '0x100a947f51fa3f1dcdf97f3ae507a72603cae63c',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://www.barbershop.finance/',
  },
  wand: {
    symbol: 'WAND',
    address: {
      137: '0x85f94ca53de6deafb171ca8fc1f019f91952777c',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://wandefi.finance/',
  },
  sing: {
    symbol: 'SING',
    address: {
      137: '0xcb898b0efb084df14dd8e018da37b4d0f06ab26d',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://singular.farm',
  },
  time: {
    symbol: 'TIME',
    address: {
      137: '0x5c59D7Cb794471a9633391c4927ADe06B8787a90',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://timeleap.finance',
  },
  iris: {
    symbol: 'IRIS',
    address: {
      137: '0xdaB35042e63E93Cc8556c9bAE482E5415B5Ac4B1',
    },
    decimals: 18,
    projectLink: 'https://www.hermesdefi.io',
  },
  aes: {
    symbol: 'AES',
    address: {
      137: '0x5ac3ceee2c3e6790cadd6707deb2e87ea83b0631',
      338: '',
    },
    decimals: 9,
    projectLink: 'https://aestandard.finance',
  },
  sandman: {
    symbol: 'SANDMAN',
    address: {
      137: '0xf9b4defdde04fe18f5ee6456607f8a2ec9ff6a75',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://sandman.farm',
  },
  quokk: {
    symbol: 'QUOKK',
    address: {
      137: '0x9469603F3Efbcf17e4A5868d81C701BDbD222555',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://polyquokka.finance',
  },
  sx: {
    symbol: 'SX',
    address: {
      137: '0x840195888db4d6a99ed9f73fcd3b225bb3cb1a79',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://sportx.bet/',
  },
  nalis: {
    symbol: 'NALIS',
    address: {
      137: '0x04f2e3ec0642e501220f32fcd9e26e77924929a9',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://app.koaladefi.finance/',
  },
  kavian: {
    symbol: 'KAVIAN',
    address: {
      137: '0xc4df0e37e4ad3e5c6d1df12d3ca7feb9d2b67104',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://kavian.finance/',
  },
  kom: {
    symbol: 'KOM',
    address: {
      137: '0xc004e2318722ea2b15499d6375905d75ee5390b8',
      338: '',
    },
    decimals: 8,
    projectLink: 'https://kommunitas.net',
  },
  gpul: {
    symbol: 'GPUL',
    address: {
      137: '0x40ed0565ecfb14ebcdfe972624ff2364933a8ce3',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://gamma.polypulsar.farm',
  },
  gbnt: {
    symbol: 'GBNT',
    address: {
      137: '0x8c9aaca6e712e2193acccbac1a024e09fb226e51',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://gamma.polypulsar.farm',
  },
  inku: {
    symbol: 'INKU',
    address: {
      137: '0x1dd9e9e142f3f84d90af1a9f2cb617c7e08420a4',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://takodefi.com/',
  },
  arablelands: {
    symbol: 'ARABLELANDS',
    address: {
      137: '0x31af84e6aeea05d8494b4136224dc9584c6c6166',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://arabella.farm/',
  },
  polygas: {
    symbol: 'POLYGAS',
    address: {
      137: '0x840b5fc8c6dee2b1140174a3abdc215190426ccf',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://www.gasstationcrypto.com',
  },
  uniq: {
    symbol: 'UNIQ',
    address: {
      137: '0x42c3d84e4e465263c85dfcf304ec3571b4332c46',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://unicorn-finance.app',
  },
  grand: {
    symbol: 'GRAND',
    address: {
      137: '0xbcf339df10d78f2b44aa760ead0f715a7a7d7269',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://www.thegrandbanks.finance/',
  },
  pqbert: {
    symbol: 'PQBERT',
    address: {
      137: '0x40038c83e459937a988b669f1159cc78d8fdad68',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://polygon.retrofarms.net',
  },
  dogira: {
    symbol: 'DOGIRA',
    address: {
      137: '0xdda40cdfe4a0090f42ff49f264a831402adb801a',
      338: '',
    },
    decimals: 9,
    projectLink: 'https://dogira.net',
  },
  avax: {
    symbol: 'AVAX',
    address: {
      137: '0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b',
      338: '',
      25: '0xe7e12F436ae05cE6623eFB68B28ca4b83A953600',
    },
    decimals: 18,
    projectLink: 'https://www.avax.network/',
  },
  libra: {
    symbol: 'LIBRA',
    address: {
      137: '0x2f535ae1a9f6405e9e6e2ff10fded846358a5c39',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://libra.astrofarms.finance/',
  },
  pbrew: {
    symbol: 'PBREW',
    address: {
      137: '0xb5106A3277718eCaD2F20aB6b86Ce0Fee7A21F09',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://polygon.cafeswap.finance',
  },
  babyquick: {
    symbol: 'BABYQUICK',
    address: {
      137: '0x9a05d1ff699ea187dc8523e333ed63503f0d82db',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://babyquick.app',
  },
  collar: {
    symbol: 'COLLAR',
    address: {
      137: '0x8df26a1bd9bd98e2ec506fc9d8009954716a05dc',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://polypup.finance',
  },
  proto: {
    symbol: 'PROTO',
    address: {
      137: '0x673e064ecb5889ef163ec3c3ea693b8f74bbc95d',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://bank.protofi.app',
  },
  azuki: {
    symbol: 'AZUKI',
    address: {
      137: '0x7cdc0421469398e0f3aa8890693d86c840ac8931',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://dokidoki.com',
  },
  axs: {
    symbol: 'AXS',
    address: {
      137: '0x61BDD9C7d4dF4Bf47A4508c0c8245505F2Af5b7b',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://axieinfinity.com/',
  },
  doki: {
    symbol: 'DOKI',
    address: {
      137: '0x5c7f7fe4766fe8f0fa9b41e2e4194d939488ff1c',
      338: '',
    },
    decimals: 18,
    projectLink: 'https://dokidoki.com',
  },
  e8: {
    symbol: 'E8',
    address: {
      137: '0x08e175a1eac9744a0f1ccaeb8f669af6a2bda3ce',
      338: '',
    },
    decimals: 9,
    projectLink: 'https://energy8.games/',
  },
  crx: {
    symbol: 'CRX',
    address: {
      25: '0xe243ccab9e66e6cf1215376980811ddf1eb7f689',
    },
    decimals: 18,
    projectLink: 'https://swap.crodex.app/',
  },
  wcro: {
    symbol: 'CRO',
    address: {
      25: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    },
    decimals: 18,
    projectLink: 'https://cronos.crypto.org/',
  },
  relay: {
    symbol: 'RELAY',
    address: {
      25: '0x9C29650a1B273A031A35F3121914aae882B144A4',
    },
    decimals: 18,
    projectLink: 'https://www.relaychain.com/',
  },
  mimatic: {
    symbol: 'MIMATIC',
    address: {
      25: '0x1c965D8E53fb1a448789e2B0FA5abc3EB2c36993',
    },
    decimals: 18,
    projectLink: 'https://www.mai.finance/',
  },
  mim: {
    symbol: 'MIM',
    address: {
      25: '0x2BC472832Eb20C65F82d6A869db845aB0C0099ba',
    },
    decimals: 18,
    projectLink: 'https://www.mim-swarm.com/',
  },
  vvs: {
    symbol: 'VVS',
    address: {
      25: '0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
    },
    decimals: 18,
    projectLink: 'https://vvs.finance/',
  },
  crona: {
    symbol: 'CRONA',
    address: {
      25: '0xadbd1231fb360047525BEdF962581F3eee7b49fe',
    },
    decimals: 18,
    projectLink: 'https://app.cronaswap.org/',
  },
  ftm: {
    symbol: 'FTM',
    address: {
      25: '0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
    },
    decimals: 18,
    projectLink: 'https://fantom.foundation/',
  },
  free: {
    symbol: 'FREE',
    address: {
      25: '0x9209d64F2930DaAe334e0fc2939709E593A88041',
    },
    decimals: 18,
    projectLink: 'https://freeriver.exchange/',
  },
  photon: {
    symbol: 'PHOTON',
    address: {
      25: '0xbdd4e5660839a088573191A9889A262c0Efc0983',
    },
    decimals: 18,
    projectLink: 'https://photonswap.finance/',
  },
  dxp: {
    symbol: 'DXP',
    address: {
      25: '0xe0c41FF9a7032de445771E12C14868CbE061C993',
    },
    decimals: 18,
    projectLink: 'https://dexpad.io/',
  },
  elk: {
    symbol: 'ELK',
    address: {
      25: '0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C',
    },
    decimals: 18,
    projectLink: 'https://app.elk.finance/',
  },
  wind: {
    symbol: 'WIND',
    address: {
      25: '0x48713151E5AFB7b4CC45f3653c1c59CF81E88D4B',
    },
    decimals: 18,
    projectLink: 'https://cronos.stormswap.finance/',
  },
  cpy: {
    symbol: 'CPY',
    address: {
      25: '0x2302d9e742eDF1f6F3547eB62AbBB76Eb5c073c7',
    },
    decimals: 18,
    projectLink: 'https://www.cronosyield.finance/',
  },
  shib: {
    symbol: 'SHIB',
    address: {
      25: '0xbED48612BC69fA1CaB67052b42a95FB30C1bcFee',
    },
    decimals: 18,
    projectLink: 'https://shibatoken.com/',
  },
  cno: {
    symbol: 'CNO',
    address: {
      25: '0x322e21dcAcE43d319646756656b29976291d7C76',
    },
    decimals: 18,
    projectLink: 'https://chronoswap.org/',
  },
  mai: {
    symbol: 'MAI',
    address: {
      25: '0x2Ae35c8E3D4bD57e8898FF7cd2bBff87166EF8cb',
    },
    decimals: 18,
    projectLink: 'https://www.mai.finance/',
  },
  salem: {
    symbol: 'SALEM',
    address: {
      25: '0x637CB66526244029407046867E1E0DFD28b2294E',
    },
    decimals: 18,
    projectLink: 'https://cronos.salem.finance/',
  },
  mmf: {
    symbol: 'MMF',
    address: {
      25: '0x97749c9B61F878a880DfE312d2594AE07AEd7656',
    },
    decimals: 18,
    projectLink: 'https://mm.finance/',
  },
  doge: {
    symbol: 'DOGE',
    address: {
      25: '0x1a8E39ae59e5556B56b76fCBA98d22c9ae557396',
    },
    decimals: 8,
    projectLink: 'https://dogecoin.com/',
  },
  atom: {
    symbol: 'ATOM',
    address: {
      25: '0xB888d8Dd1733d72681b30c00ee76BDE93ae7aa93',
    },
    decimals: 6,
    projectLink: 'https://cosmos.network/',
  },
  tonic: {
    symbol: 'TONIC',
    address: {
      25: '0xDD73dEa10ABC2Bff99c60882EC5b2B81Bb1Dc5B2',
    },
    decimals: 18,
    projectLink: 'https://tectonic.finance/',
  },
  loot: {
    symbol: 'LOOT',
    address: {
      25: '0xEd34211cDD2cf76C3cceE162761A72d7b6601E2B',
    },
    decimals: 18,
    projectLink: 'https://lootnetwork.ca/',
  },
  dna: {
    symbol: 'DNA',
    address: {
      25: '0xCc57F84637B441127f2f74905b9d99821b47b20c',
    },
    decimals: 18,
    projectLink: 'https://dnadollar.com',
  },
  dshare: {
    symbol: 'DSHARE',
    address: {
      25: '0x0e98DC462fF438b802FaD0D68fF7F111a0674BB5',
    },
    decimals: 18,
    projectLink: 'https://dnadollar.com',
  },
  cross: {
    symbol: 'CROSS',
    address: {
      25: '0x6ef20cA7E493c52095e892DAB78a7FD0e7e2a279',
    },
    decimals: 18,
    projectLink: 'https://avtocross.finance/',
  },
  crogas: {
    symbol: 'CROGAS',
    address: {
      25: '0x2c7B96bDDa46104521d40AD3dCf80F9015051c31',
    },
    decimals: 18,
    projectLink: 'https://www.gasstationcrypto.com/',
  },
  dark: {
    symbol: 'DARK',
    address: {
      25: '0x83b2ac8642ae46fc2823bc959ffeb3c1742c48b5',
    },
    decimals: 18,
    projectLink: 'https://www.darkcrypto.finance/',
  },
  sky: {
    symbol: 'SKY',
    address: {
      25: '0x9d3bbb0e988d9fb2d55d07fe471be2266ad9c81c',
    },
    decimals: 18,
    projectLink: 'https://www.darkcrypto.finance/',
  },
  cnft: {
    symbol: 'CNFT',
    address: {
      25: '0xE2589867ad472bD1Aa46407c182E13c08f8Eadc9',
    },
    decimals: 18,
    projectLink: 'https://chronoswap.org/',
  },
  chibiki: {
    symbol: 'cHIBIKI',
    address: {
      25: '0x6B66fCB66Dba37F99876a15303b759c73fc54ed0',
    },
    decimals: 18,
    projectLink: 'https://hibiki.finance/',
  },
}

export default tokens
