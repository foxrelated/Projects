<?php 
/**
 * [NULLED BY DARKGOTH 2014]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author			Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: default.html.php 5350 2013-02-13 10:59:22Z Raymond_Benc $
 */
 
defined('PHPFOX') or exit('NO DICE!'); 

?>
<div class="nb_message_holder">
	{$sMessage}
	{if isset($sNext)}
	<meta http-equiv="refresh" content="2;url={$sNext}" />
	{/if}
</div>

<div class="nb_message_image"></div>