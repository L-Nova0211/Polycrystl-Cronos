import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'
import tokens from './constants/tokens'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 5.5

// CRYSTL_PER_BLOCK details
// 40 CRYSTL is minted per block
// 20 CRYSTL per block is sent to Burn pool (A farm just for burning CRYSTL)
// 10 CRYSTL per block goes to CRYSTL syrup pool
// 10 CRYSTL per block goes to Yield farms and lottery
// CRYSTL_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// CRYSTL/Block in src/views/Home/components/CrystlStats.tsx = 20 (40 - Amount sent to burn pool)

export const CRYSTL_PER_BLOCK = new BigNumber(1)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const CRYSTL_PER_YEAR = CRYSTL_PER_BLOCK.times(BLOCKS_PER_YEAR)
export const BASE_URL = 'https://cronos.crystl.finance'
export const BASE_EXCHANGE_URL = `https://swap.crodex.app`
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const BASE_BSC_SCAN_URL = 'https://cronos.crypto.org/explorer/'
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 500000
export const DEFAULT_VAULT_GAS_LIMIT = 10000000
export const DEFAULT_GAS_PRICE = 5000
export const TESTNET_CHAIN_ID = '338'
export const MAINNET_CHAIN_ID = '25'

// VAULT CONFIGS
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const DAILY_COMPOUND_FREQUENCY = 4
export const PERFORMANCE_FEE = 5
export const WITHDRAWAL_FEE = 0.001
export const TOKEN_PER_BLOCK_MAP = {
  '0x1948abC5400Aa1d72223882958Da3bec643fb4E5': 'dinoPerBlock',
  '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85': 'cakePerBlock',
  '0xC6Ae34172bB4fC40c49C3f53badEbcE3Bb8E6430': 'hairPerBlock',
  '0x0d17C30aFBD4d29EEF3639c7B1F009Fd6C9f1F72': 'BONE_PER_BLOCK',
  '0xC8Bd86E5a132Ac0bf10134e270De06A8Ba317BFe': 'wexPerBlock',
  '0x90AB4f52bD975DcB17965666c98FC908fA173d31': 'kavianPerBlock',
  '0xA375495919205251a05f3B259B4D3cc30a4d3ED5': 'gammaPulsarPerBlock',
  '0xB19300246e19929a617C4260189f7B759597B8d8': 'takoPerBlock',
  '0x3C58EA8D37f4fc6882F678f822E383Df39260937': 'rollPerBlock',
  '0x21BE35019F1b2C89Baab802fbA72F20b25435087': 'LibraPerBlock',
  '0x77ea4a4cF9F77A034E4291E8f457Af7772c2B254': 'cronaPerSecond',
  '0xDccd6455AE04b03d785F12196B492b18129564bc': 'vvsPerBlock',
  '0x6eC89CCcDb563Ac442d2370F6E47bC1C78e023fC': 'StormPerBlock',
  '0xf6D7266A363FED332d2a3E9382E6Ce419eF5434D': 'cpyPerBlock',
  '0x66A5f06d9c8Bdc27bb0768eefF71D22B468fB464': 'smolPerBlock',
  '0x3790F3A1cf8A478042Ec112A70881Dcfa9c7fd2a': 'cakePerBlock',
  '0xBD124D3B18a382d807a9E491c7f1848403856B08': 'salemPerSecond',
  '0x6bE34986Fdd1A91e4634eb6b9F8017439b7b5EDc': 'meerkatPerBlock',
  '0x1A4bb8E03C35e2B672A0fcE18cab920aa023d7FC': 'dSharePerSecond',
  '0xC3842B2d35dd249755f170dD8F0f83b8BF967E21': 'crossPerSecond',
  '0x42B652A523367e7407Fb4BF2fA1F430781e7db8C': 'rewardPerSecond',
}

export const FARMS = {
  '0x1948abC5400Aa1d72223882958Da3bec643fb4E5': 'Dinoswap',
  '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85': 'Jetswap',
  '0xC6Ae34172bB4fC40c49C3f53badEbcE3Bb8E6430': 'Barbershop',
  '0x0d17C30aFBD4d29EEF3639c7B1F009Fd6C9f1F72': 'Boneswap',
  '0xC8Bd86E5a132Ac0bf10134e270De06A8Ba317BFe': 'Waultswap',
  '0x90AB4f52bD975DcB17965666c98FC908fA173d31': 'Kavian',
  '0xA375495919205251a05f3B259B4D3cc30a4d3ED5': 'Polypulsar',
  '0xB19300246e19929a617C4260189f7B759597B8d8': 'TakoDefi',
  '0x3C58EA8D37f4fc6882F678f822E383Df39260937': 'Polyroll',
  '0x21BE35019F1b2C89Baab802fbA72F20b25435087': 'Libra',
  '0x77ea4a4cF9F77A034E4291E8f457Af7772c2B254': 'Crona',
  '0xDccd6455AE04b03d785F12196B492b18129564bc': 'VVS',
  '0x6eC89CCcDb563Ac442d2370F6E47bC1C78e023fC': 'Stormswap',
  '0xf6D7266A363FED332d2a3E9382E6Ce419eF5434D': 'CronosYield',
  '0x66A5f06d9c8Bdc27bb0768eefF71D22B468fB464': 'SmolSwap',
  '0x3790F3A1cf8A478042Ec112A70881Dcfa9c7fd2a': 'Chronoswap',
  '0xBD124D3B18a382d807a9E491c7f1848403856B08': 'Salem',
  '0x6bE34986Fdd1A91e4634eb6b9F8017439b7b5EDc': 'MMFinance',
  '0x1A4bb8E03C35e2B672A0fcE18cab920aa023d7FC': 'DNADollar',
  '0xC3842B2d35dd249755f170dD8F0f83b8BF967E21': 'AvtoCross',
  '0x42B652A523367e7407Fb4BF2fA1F430781e7db8C': 'DarkCrypto',
}

export const FARM_SITES = {
  '0x1948abC5400Aa1d72223882958Da3bec643fb4E5': 'https://dinoswap.exchange',
  '0x4e22399070aD5aD7f7BEb7d3A7b543e8EcBf1d85': 'https://polygon.jetswap.finance',
  '0xC6Ae34172bB4fC40c49C3f53badEbcE3Bb8E6430': 'https://www.barbershop.finance/',
  '0x0d17C30aFBD4d29EEF3639c7B1F009Fd6C9f1F72': 'https://farm.boneswap.finance',
  '0xC8Bd86E5a132Ac0bf10134e270De06A8Ba317BFe': 'https://app.wault.finance/polygon/',
  '0x90AB4f52bD975DcB17965666c98FC908fA173d31': 'https://kavian.finance/',
  '0xA375495919205251a05f3B259B4D3cc30a4d3ED5': 'https://gamma.polypulsar.farm/',
  '0xB19300246e19929a617C4260189f7B759597B8d8': 'https://takodefi.com/',
  '0x3C58EA8D37f4fc6882F678f822E383Df39260937': 'https://polyroll.org',
  '0x21BE35019F1b2C89Baab802fbA72F20b25435087': 'https://libra.astrofarms.finance',
  '0x77ea4a4cF9F77A034E4291E8f457Af7772c2B254': 'https://app.cronaswap.org/',
  '0xDccd6455AE04b03d785F12196B492b18129564bc': 'https://vvs.finance/',
  '0x6eC89CCcDb563Ac442d2370F6E47bC1C78e023fC': 'https://cronos.stormswap.finance/',
  '0xf6D7266A363FED332d2a3E9382E6Ce419eF5434D': 'https://www.cronosyield.finance/',
  '0x66A5f06d9c8Bdc27bb0768eefF71D22B468fB464': 'https://www.smolswap.com/',
  '0x3790F3A1cf8A478042Ec112A70881Dcfa9c7fd2a': 'https://chronoswap.org/',
  '0xBD124D3B18a382d807a9E491c7f1848403856B08': 'https://cronos.salem.finance/',
  '0x6bE34986Fdd1A91e4634eb6b9F8017439b7b5EDc': 'https://mm.finance/',
  '0x1A4bb8E03C35e2B672A0fcE18cab920aa023d7FC': 'https://dnadollar.com/',
  '0xC3842B2d35dd249755f170dD8F0f83b8BF967E21': 'https://avtocross.finance/',
  '0x42B652A523367e7407Fb4BF2fA1F430781e7db8C': 'https://www.darkcrypto.finance/',
}

export const PROJECT_SITES = {
  '0xd141aeD3FA86f411808D5D74BEbBC038e94f300D': tokens.crx.projectLink,
  '0x89e1135b2C82FEb19F5ecb78e35C309A6aEF7b01': tokens.crx.projectLink,
  '0x297049Bd11C1c53381e5a1730Ae1cbf27e258739': tokens.dai.projectLink,
  '0xA9005A6C054a432a7A53d413d5afE5D216cf69e3': tokens.btc.projectLink,
  '0xa6E9f20A93E0b50f074bc2FC693E8Add3812F8c4': tokens.crx.projectLink,
  '0xaa9d281B761d8988Af83B4E2bF3fC8f5dB2E7aE5': tokens.usdc.projectLink,
  '0xc061A750B252f36337e960BbC2A7dB96b3Bc7906': 'https://pbs.twimg.com/media/EWYbP7DXQAMDgz5?format=jpg&name=large',
  '0x182414159C3eeF1435aF91Bcf0d12AbcBe277A46': tokens.wcro.projectLink,
  '0x65B51aad23e20C5937a7A3a19112fCC6d71a524A': tokens.relay.projectLink,
  '0x586e3658d0299d5e79B53aA51B641d6A0B8A4Dd3': tokens.wcro.projectLink,
  '0xBAbF643b2Ff4C4F1B184b41F2C88a03D1abfa346': tokens.avax.projectLink,
  '0x831562B1fC831f89a0Ec7919e4F709057845BE09': tokens.wmatic.projectLink,
  '0x28C7AEB8f51C6C7e43D273A2a20072A51445dBdA': tokens.mimatic.projectLink,
  '0x47AB43F8176696CA569b14A24621A46b318096A7': tokens.wcro.projectLink,
  '0x42c754b7b6b67994666dC9a79068FABCD44B012C': tokens.mimatic.projectLink,
  '0x5Fa30Ff80be31772E20f322c45F60B5C67c3f65B': tokens.mim.projectLink,
  '0xbf62c67eA509E86F07c8c69d0286C0636C50270b': tokens.vvs.projectLink,
  '0x8F09fFf247B8fDB80461E5Cf5E82dD1aE2EBd6d7': tokens.btc.projectLink,
  '0xA111C17f8B8303280d3EB01BBcd61000AA7F39F9': 'https://pbs.twimg.com/media/EWYbP7DXQAMDgz5?format=jpg&name=large',
  '0x814920D1b8007207db6cB5a2dD92bF0b082BDBa1': tokens.vvs.projectLink,
  '0xeD75347fFBe08d5cce4858C70Df4dB4Bbe8532a0': tokens.crona.projectLink,
  '0x19Dd1683e8c5F6Cc338C1438f2D25EBb4e0b0b08': tokens.wcro.projectLink,
  '0x8232aA9C3EFf79cd845FcDa109B461849Bf1Be83': 'https://pbs.twimg.com/media/EWYbP7DXQAMDgz5?format=jpg&name=large',
  '0x0625A68D25d304aed698c806267a4e369e8Eb12a': tokens.wcro.projectLink,
  '0xb4684F52867dC0dDe6F931fBf6eA66Ce94666860': tokens.btc.projectLink,
  '0xDA2FC0fE4B03deFf09Fd8CFb92d14e7ebC1F9690': tokens.dai.projectLink,
  '0x503d56B2f535784B7f2bcD6581F7e1b46DC0e60c': tokens.usdt.projectLink,
  '0x394080F7c770771B6EE4f4649bC477F0676ceA5C': tokens.wmatic.projectLink,
  '0x193add22b0a333956C2Cb13F4D574aF129629c5f': tokens.avax.projectLink,
  '0xDee7A79bb414FFB248EF4d4c5560AdC91F547F41': tokens.ftm.projectLink,
  '0xC340f1C211bD3304bAbc076A63009c6Da0Bf9D42': tokens.free.projectLink,
  '0xe35c203E2183869001304212873e8261016a8CDe': tokens.mim.projectLink,
  '0x77c30A3940a7178683aFC75E1e97Dd51AD80bdD0': tokens.crx.projectLink,
  '0x8E85D51b1297dcB486837994d66736bc90E50D6e': tokens.ftm.projectLink,
  '0x7Ac511e0240ccFb86B358c73DFbC4d7497749412': tokens.bnb.projectLink,
  '0x968fE4C06fdD503E278d89d5dFe29935A111476C': tokens.usdc.projectLink,
  '0x2F47AE6d9d8e45BFb3b1358fD0f77652ad3AB18F': tokens.photon.projectLink,
  '0x637348EaCE7f44C1dF82e15bcb0F968351fB7406': tokens.usdc.projectLink,
  '0xeb6950FC5282CC32a1759B8E81EF4b175C5211EE': tokens.dxp.projectLink,
  '0xfe6379509C7134429f7B0AEfDdA6f2b74d82b6bC': tokens.elk.projectLink,
  '0x39cC0E14795A8e6e9D02A21091b81FE0d61D82f9': tokens.usdc.projectLink,
  '0x7AA68B5D29a838C8Dafa033c5276a5379BCD0d3B': tokens.polydoge.projectLink,
  '0xDF06013797083E077aA1347D74bD7c7cDfeF7856': tokens.crystl.projectLink,
  '0x280aCAD550B2d3Ba63C8cbff51b503Ea41a1c61B': tokens.vvs.projectLink,
  '0xaEbaFDbe975DB0bfbF4e95a6493CB93d02cc86aE': tokens.usdc.projectLink,
  '0xdEb28305D5c8d5Ce3B3bc5398Ba81012580a5A11': tokens.crystl.projectLink,
  '0x7d978D63b0109fEd6A0FaE1400970E145c86c508': tokens.wind.projectLink,
  '0x35a681DD0C12e95391c27a3e9ce29Bf0d44e9599': tokens.cpy.projectLink,
  '0xe61Db569E231B3f5530168Aa2C9D50246525b6d6': tokens.wcro.projectLink,
  '0xc9eA98736dbC94FAA91AbF9F4aD1eb41e7fb40f4': tokens.shib.projectLink,
  '0x0427F9C304b0028f67A5fD61ffdD613186c1894B': tokens.crona.projectLink,
  '0x482E0eEb877091cfca439D131321bDE23ddf9bB5': tokens.crona.projectLink,
  '0x3d2180DB9E1B909f35C398BC39EF36108C0FC8c3': tokens.wcro.projectLink,
  '0xEBf7107D7A3Acfec40a1304778f96D364bcb6BF1': 'https://pbs.twimg.com/media/EWYbP7DXQAMDgz5?format=jpg&name=large',
  '0xd7e8239A44Ff8CFa2Ab9fB19F885ac2267A51862': tokens.usdc.projectLink,
  '0xfD18c2fb2eB8693934E18C5a27757Bb087a98dB7': 'https://pbs.twimg.com/media/EWYbP7DXQAMDgz5?format=jpg&name=large',
  '0xe8D33AEEE115245e684Ab7A2A9bf7dCF0cB71f40': tokens.usdc.projectLink,
  '0x3Eb9FF92e19b73235A393000C176c8bb150F1B20': tokens.wcro.projectLink,
  '0xb00336649c04a073c2Dde47260618721b8223d94': tokens.crystl.projectLink,
  '0xD8a6b00D066bf66dEABA913fB1E63D24d81ff68b': tokens.mai.projectLink,
  '0x2310866684D3cbbf335e68692Fd481A051128a4d': tokens.mim.projectLink,
  '0x4A84e3CcC9Ac08D5cAE6765B45CF7c6Ab287AAD9': tokens.salem.projectLink,
  '0x03F297457ED6197D0A387a5C53dC72aCf8fDB3FC': tokens.salem.projectLink,
  '0xea7fc6A39B0d0344e1662E6ABF2FEcD19Bf3D029': tokens.btc.projectLink,
  '0x5cc953f278bf6908B2632c65D6a202D6fd1370f9': 'https://pbs.twimg.com/media/EWYbP7DXQAMDgz5?format=jpg&name=large',
  '0x285a569EDD6210a0410883d2E29471A6B0c7790d': 'https://pbs.twimg.com/media/EWYbP7DXQAMDgz5?format=jpg&name=large',
  '0xbA452A1c0875D33a440259B1ea4DcA8f5d86D9Ae': tokens.mmf.projectLink,
  '0x5383202D48C24aAA19873366168f2Ed558a00ff0': tokens.btc.projectLink,
  '0x019d9479606FBDd4aCB16488e0aAE49E4684322b': 'https://pbs.twimg.com/media/EWYbP7DXQAMDgz5?format=jpg&name=large',
  '0x2A560f2312CB56327AD5D65a03F1bfEC10b62075': tokens.doge.projectLink,
  '0x9e5bd780dff875Dd85848a65549791445AE25De0': tokens.atom.projectLink,
  '0xBed3B43742dc04cD69B35b8FfBA7024e31cFf54a': tokens.cno.projectLink,
  '0x92D38C70cA74d55f896814a01492Bde11b74c988': tokens.wcro.projectLink,
  '0x2f12D47Fe49B907d7a5Df8159C1CE665187F15c4': tokens.tonic.projectLink,
  '0x8678778b74884F1d01290E323D4b04481f587231': tokens.loot.projectLink,
  '0x3f72530e62Bc731fCaA8BE9F3a7A10aab457d365': tokens.dna.projectLink,
  '0x3AC3A1A067E3159bD9201aB05C965BCC66763dfE': tokens.dshare.projectLink,
  '0x50aF1c38AF0481C9d06F72a045274201781773ae': tokens.cno.projectLink,
  '0x4BbCE14d69F9fEA118992f1944c084753f1B0bf9': tokens.cno.projectLink,
  '0x4B377121d968Bf7a62D51B96523d59506e7c2BF0': tokens.tonic.projectLink,
  '0x3A0490585Aa889DeD22BCB8C2E6C03a0Cb319E51': tokens.cross.projectLink,
  '0x26882757Bc8A8DcFace126d78d38a7bBA2a280cd': tokens.cross.projectLink,
  '0x853067186eeB57241d8D460bD8c3aA92CBF6f60e': tokens.dna.projectLink,
  '0xFe0F0d50175789C1F69B41dB797cc9ABd8Ab0120': tokens.dshare.projectLink,
  '0xA4AA24B8e855052071Df60E174219e6c8FEe45a3': tokens.dark.projectLink,
  '0xaA0845EE17e4f1D4F3A8c22cB1e8102baCf56a77': tokens.sky.projectLink,
  '0xC20397D6D31d4A0ff76b94E4Eaed7a36f5c4d992': tokens.cno.projectLink,
  '0x92591aDD92FA326F8E7a87d7DFE44b3bDE09f919': tokens.crystl.projectLink,
  '0xf91F9B62eE4c377C38726b53F8e2761a678B3F88': tokens.cnft.projectLink,
  '0x721E20D8ccE727Ee7262366B1B44C617aBA3547B': tokens.chibiki.projectLink,
}

export const LP_PROVIDER = {
  '0xc35DADB65012eC5796536bD9864eD8773aBc74C4': 'SUSHI LP',
  '0x668ad0ed2622C62E24f0d5ab6B6Ac1b9D2cD4AC7': 'JETSWAP LP',
  '0xa98ea6356A316b44Bf710D5f9b6b4eA0081409Ef': 'WAULT LP',
  '0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B': 'DFYN LP',
  '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32': 'QUICK LP',
  '0xCf083Be4164828f00cAE704EC15a36D711491284': 'APE LP',
  '0x477Ce834Ae6b7aB003cCe4BC4d8697763FF456FA': 'POLYCAT LP',
  '0x800b052609c355cA8103E06F022aA30647eAd60a': 'COMETH LP',
  '0x73A48f8f521EB31c55c0e1274dB0898dE599Cb11': 'CRONA LP',
  '0xe9c29cB475C0ADe80bE0319B74AD112F1e80058F': 'CRODEX LP',
  '0x3B44B2a187a7b3824131F8db5a74194D0a42Fc15': 'VVS LP',
  '0x462C98Cae5AffEED576c98A55dAA922604e2D875': 'PHOTON LP',
  '0xEEa0e2830D09D8786Cb9F484cA20898b61819ef1': 'ELK LP',
  '0x7Aa2149fF9EF4A09D4ace72C49C26AaE8C89Fb48': 'SMOL LP',
  '0x6C50Ee65CFcfC59B09C570e55D76daa7c67D6da5': 'CHRONO LP',
  '0xd590cC180601AEcD6eeADD9B7f2B7611519544f4': 'MEERKAT LP',
  '0x796E38Bb00f39a3D39ab75297D8d6202505f52e2': 'DUCKY LP',
}

export const LIQUIDITY_LINKS = {
  '0xc35DADB65012eC5796536bD9864eD8773aBc74C4': 'https://app.sushi.com/add',
  '0x668ad0ed2622C62E24f0d5ab6B6Ac1b9D2cD4AC7': 'https://polygon-exchange.jetswap.finance/#/add',
  '0xa98ea6356A316b44Bf710D5f9b6b4eA0081409Ef': 'https://swap.wault.finance/polygon/index.html#/add',
  '0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B': 'https://exchange.dfyn.network/#/add',
  '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32': 'https://quickswap.exchange/#/add',
  '0xCf083Be4164828f00cAE704EC15a36D711491284': BASE_ADD_LIQUIDITY_URL,
  '0x477Ce834Ae6b7aB003cCe4BC4d8697763FF456FA': 'https://polycat.finance/add',
  '0x800b052609c355cA8103E06F022aA30647eAd60a': 'https://swap.cometh.io/#/add',
  '0x73A48f8f521EB31c55c0e1274dB0898dE599Cb11': 'https://app.cronaswap.org/add',
  '0xe9c29cB475C0ADe80bE0319B74AD112F1e80058F': 'https://swap.crodex.app/#/add',
  '0x3B44B2a187a7b3824131F8db5a74194D0a42Fc15': 'https://vvs.finance/add',
  '0x462C98Cae5AffEED576c98A55dAA922604e2D875': 'https://photonswap.finance/#/add',
  '0xEEa0e2830D09D8786Cb9F484cA20898b61819ef1': 'https://app.elk.finance/#/add',
  '0x7Aa2149fF9EF4A09D4ace72C49C26AaE8C89Fb48': 'https://www.smolswap.com/add',
  '0x6C50Ee65CFcfC59B09C570e55D76daa7c67D6da5': 'https://chronoswap.org/add',
  '0xd590cC180601AEcD6eeADD9B7f2B7611519544f4': 'https://mm.finance/add',
  '0x796E38Bb00f39a3D39ab75297D8d6202505f52e2': 'https://exchange.duckydefi.com/#/add',
}

export const CRODEX_FARMS = [
  '0xDb752eB155F6075d4Ba0e09c371eB5eBB0D4bAA5',
  '0xc2FF850F3921C1dbeD263aa1Fa94FE2A898870a8',
  '0x0f1e250f10F6AEb95A1B73DFd1d7f47a420236C4',
  '0x81E200976B7928aEFD34CE51544e65FE73e88bE4',
  '0x681E1dC139FEB9024F1C63b37673cFCD630817Bb',
  '0xcdd27c1C74631700CA0Fa165f3450435C8D009f4',
  '0x8857591ea846cB23795538a7521c868f0E0D6844',
  '0x55B0FC13045B0bf6CD74631246b92f7abCFcCca2',
  '0xfA216318992dDE204b32f896a1b7897fdc8c6f27',
  '0x12EE4bc798Fd985195b0d293c2c61fBf3DcDfe04',
  '0xd34d5d5D635b3090b85c3A3A96B0E8d78316aE0f',
  '0xf632373d4cEc094d90B60ca509679332E0013183',
  '0xAE7E71e15547dA622eaeAfA9b4272B4Ac1f9615a',
  '0x5d05Ce6ae9FDC9dC3fBba240a98320Bc604f80a7',
  '0xe8aD609cb055329d84e6F7f430b098B46E9d3f51',
  '0x7d29D4b61E8A0A482BDf8e6c9b1985c67dD43780',
  '0x866a0A67CfDe50b53361dE76b2013F4f134d347C',
  '0xeE1B28B5922426D8B1A9169F0e9681c2D870ECe3',
  '0x485D894425e7B22822D2851d5622de9A99d249A1',
  '0x5a25d023F298025aE1eC0549Fcba5F0f3D6c7Fc2',
  '0x536F4b39D659c17C4255E2d235f5fdb836Fa165E',
  '0x9F6a444C79F1Cb15B1e6CE3EB8DcB1112036ad7C',
  '0xf3EC6425c71613Fb2f1c225C535bBd32221C070e',
  '0xF6f07c09f47cdEb7BE01bf6c3882EeFA59f8aE09',
  '0xee71F489b174185E8E01386913b5c8f1337BD9db',
  '0xC42F861Fb18c752ce7A848f1B637f05ca7ED47Fa',
  '0xD411e37Ae0EcB7a6DE80f9DF050e0f9190B07eA9',
  '0x5637Fca347B025EEBe51a943C47C1a9c250012fc',
  '0x7BCB67d1B4a6D469939d5B2F6Deb971922CFA222',
  '0x1d970F305bE431569a7f1Cd5ce9453e67BE08Dee',
  '0xCc424504FB1ad8F602D04c6649b15cEC5Bd7ceBc',
  '0x91d6C69f09c864146631481F7aFfc6BcD17a27ee',
  '0xb0d451f6d8EFbc080e77889F44cBc6C1Cd4F25f6',
  '0x9765F1A4957022979a3fB326775Ca79877F24697',
  '0xc1e3d413c60e1F6A55a04C0C1F1a0546E72eAb3B',
  '0x1E246845b1680CebaC9A69232008656a553583D6',
  '0x554d6c39ADF6a68143513B6a6eF0e960a5b96F12',
]

export const PHOTON_FARMS = [
  '0xBC02e3b80e830d9da28976Dd62562C4BDa0a90cd',
  '0x7e0f15E7684b92CE51c2F8cb05b14B577b11f975',
  '0x246E9893c3736DAAEFF818db65c6BaE07A34C3B1',
  '0x2CBB651E8F339dEC1F914AE6b8717e98A45e83B7',
  '0xe38125950c7bF32d634231C1bBDc4Cbc0B1D11E5',
  '0x1173EC73A71F175d09BB064739F6DF1Cb67b8cEE',
  '0xAb2e8F88b222b1cBB07610F29F7a9e2B9d63701c',
]

export const ELK_FARMS = [
  '0xF8A25520f98B4E2674b295Fd3026BB7333B265fD',
  '0xD9f96F1e4aE3873c2A76b0114c29f269D0350BcA',
  '0x2668A0A271A7769da9503ffd6DC35Cf7aC1Afb60',
]

export const CRONASWAP_FARMS = ['0x77ea4a4cF9F77A034E4291E8f457Af7772c2B254']

export const SALEM_FARMS = ['0xBD124D3B18a382d807a9E491c7f1848403856B08']

export const DNA_FARMS = ['0x1A4bb8E03C35e2B672A0fcE18cab920aa023d7FC']

export const CROSS_FARMS = ['0xC3842B2d35dd249755f170dD8F0f83b8BF967E21']

export const DEPOSIT_FEES_BY_PID_V1 = {}

export const DEPOSIT_FEES_BY_PID_V2 = {}

export enum RiskLevel {
  ZERO = 0,
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
